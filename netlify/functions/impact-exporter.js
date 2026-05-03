const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Content-Type': 'application/json'
}

function json(status, body) {
  return { statusCode: status, headers: CORS, body: JSON.stringify(body) }
}

function generateHTML(data) {
  const { header, content, footer, colors, type_document, secteur, domaine, client_nom, produits } = data
  const c = colors || { primary: '#0C1F40', secondary: '#E8631A', accent: '#F5A623' }

  let produitsTable = ''
  if (produits && produits.length) {
    const rows = produits.map(p => `
      <tr><td>${p.nom}</td><td>${p.quantite || 1}</td><td>${p.prix_ht} FCFA</td><td>${p.tva || 0}%</td><td>${(p.prix_ht * (p.quantite || 1))} FCFA</td></tr>
    `).join('')
    produitsTable = `
      <table style="width:100%;border-collapse:collapse;margin:15px 0;font-size:14px">
        <tr style="background:${c.primary};color:#fff">
          <th style="padding:8px;text-align:left">Produit</th>
          <th style="padding:8px;text-align:left">Qté</th>
          <th style="padding:8px;text-align:left">Prix HT</th>
          <th style="padding:8px;text-align:left">TVA</th>
          <th style="padding:8px;text-align:left">Total</th>
        </tr>
        ${rows}
        <tr style="font-weight:700;background:#f0f0f0">
          <td colspan="4" style="padding:8px;text-align:right">TOTAL</td>
          <td style="padding:8px">${produits.reduce((s,p) => s + (p.prix_ht * (p.quantite || 1)), 0)} FCFA</td>
        </tr>
      </table>`
  }

  let contentHTML = (content || []).map(s => `
    <div style="margin-bottom:20px;page-break-inside:avoid">
      <div style="color:${c.secondary};font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px">${s.tag || ''}</div>
      <h3 style="color:${c.primary};font-size:18px;margin:0 0 6px 0">${s.subtitle || s.title || ''}</h3>
      <ul style="margin:0;padding-left:18px;color:#333;font-size:14px;line-height:1.6">
        ${(s.points || []).map(p => `<li>${p.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')}</li>`).join('')}
      </ul>
    </div>
  `).join('')

  return `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>${header?.title || type_document || 'Document'}</title>
<style>
  @page { margin: 20mm 15mm }
  body { font-family: 'DM Sans', Arial, sans-serif; color: #222; margin: 0; padding: 20px; font-size: 14px; line-height: 1.5 }
  .header { text-align: center; margin-bottom: 30px; border-bottom: 3px solid ${c.secondary}; padding-bottom: 15px }
  .header h1 { color: ${c.primary}; font-size: 24px; margin: 0 0 5px 0 }
  .header .sub { color: #666; font-size: 14px }
  .footer { margin-top: 40px; border-top: 1px solid #ddd; padding-top: 15px; font-size: 12px; color: #888; text-align: center }
  table { width: 100%; border-collapse: collapse; margin: 15px 0 }
  th, td { padding: 8px; text-align: left; border-bottom: 1px solid #ddd }
  th { background: ${c.primary}; color: #fff }
  .badge { display: inline-block; background: ${c.accent}; color: #fff; padding: 3px 10px; border-radius: 4px; font-size: 11px; font-weight: 700 }
  .info-line { display: flex; justify-content: space-between; margin: 5px 0; font-size: 13px }
</style>
</head><body>
  <div class="header">
    ${data.logo_url ? `<img src="${data.logo_url}" style="max-height:60px;margin-bottom:10px">` : ''}
    <h1>${header?.title || ''}</h1>
    <div class="sub">${secteur || ''} ${domaine ? '· ' + domaine : ''} <span class="badge">${client_nom || ''}</span></div>
  </div>
  ${produitsTable}
  ${contentHTML}
  <div class="footer">
    ${footer?.text || ''}<br>
    ${footer?.contact || ''}
  </div>
</body></html>`
}

function generatePPTX(data) {
  const { header, content, colors, produits } = data
  const c = colors || { primary: '#0C1F40', secondary: '#E8631A', accent: '#F5A623' }

  let slides = []

  // Slide 1: Title
  slides.push({
    title: header?.title || 'Document',
    subtitle: data.secteur || '',
    color: c.primary
  })

  // Content slides
  for (const section of (content || [])) {
    slides.push({
      title: section.subtitle || section.title || '',
      tag: section.tag || '',
      points: section.points || [],
      subtitle: data.domaine || '',
      color: c.secondary
    })
  }

  // Products slide if any
  if (produits && produits.length) {
    slides.push({
      title: 'Détail des produits',
      table: produits.map(p => [p.nom, p.prix_ht + ' FCFA', (p.quantite || 1) + 'x', ((p.prix_ht * (p.quantite || 1))) + ' FCFA']),
      color: c.accent
    })
  }

  return JSON.stringify({ type: 'pptx', slides, colors: c })
}

exports.handler = async function(event) {
  if (event.httpMethod === 'OPTIONS') return json(200, {})
  if (event.httpMethod !== 'POST') return json(405, { error: 'Method not allowed' })

  try {
    const body = JSON.parse(event.body || '{}')
    const format = body.format || 'html'

    switch (format) {
      case 'html':
        return json(200, { html: generateHTML(body), format: 'html' })

      case 'pptx':
        return json(200, { data: generatePPTX(body), format: 'pptx' })

      case 'pdf':
        const html = generateHTML(body)
        return json(200, { html, format: 'pdf' })

      default:
        return json(400, { error: 'Unsupported format: ' + format })
    }
  } catch (err) {
    console.error('impact-exporter error:', err)
    return json(500, { error: err.message || 'Export failed' })
  }
}
