export const downloadAsWord = (content: string, filename: string = 'BrajMart_Pricing_Sheet_2025.doc') => {
  const header = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office'
          xmlns:w='urn:schemas-microsoft-com:office:word'
          xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
        <meta charset='utf-8'>
        <title>BrajMart Pricing Sheet 2025</title>
        <style>
            body {
                font-family: Calibri, Arial, sans-serif;
                font-size: 10pt;
            }
            table {
                border-collapse: collapse;
                width: 100%;
                margin-bottom: 20px;
            }
            th, td {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: left;
            }
            th {
                background-color: #002B5B;
                color: white;
                font-weight: bold;
            }
            .category-header {
                background-color: #1e5a8e !important;
                color: white !important;
                font-weight: bold;
                text-align: center;
            }
            .subcategory {
                background-color: #e3f2fd;
                font-weight: bold;
                color: #002B5B;
            }
            .price-highlight {
                color: #0d6efd;
                font-weight: bold;
            }
            .cost-to-company {
                color: #dc3545;
                font-weight: bold;
            }
            .timeline {
                color: #28a745;
                font-weight: bold;
            }
            .buffer {
                color: #fd7e14;
                font-style: italic;
            }
            .header {
                background-color: #002B5B;
                color: white;
                padding: 20px;
                text-align: center;
                margin-bottom: 20px;
            }
            .payment-terms-section, .notes-section {
                margin: 20px 0;
                padding: 15px;
                border: 2px solid #002B5B;
                border-radius: 8px;
            }
        </style>
    </head>
    <body>
  `;
  const footer = '</body></html>';
  const sourceHTML = header + content + footer;

  const blob = new Blob(['\ufeff', sourceHTML], {
    type: 'application/msword'
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
