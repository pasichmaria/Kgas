import html2pdf from 'html2pdf.js'

export  const handleSaveAsPDF = () => {
  const element = document.getElementById('violarion-act');
  html2pdf( element, {
    margin: 0.5,
    filename: 'violation_act.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  });
};
