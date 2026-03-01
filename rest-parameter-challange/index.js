function getLabelsHTML(text, sender, ...names) {
  return names.map((a) => 
   `<div class="container">
      <p>Dear ${a.name},</p>
      <p>${text}</p>
      <p>Best regards,</p>
      <p>${sender}</p>
    </div>`
  ).join('');
}

const text = 'Thank you for all your hard work throughout the year!';
const sender = 'Tom';

document.getElementById('label-container').innerHTML = getLabelsHTML(text, sender, {name:'Sally'}, {name:'Mile'}, {name: 'Rob'}, {name: 'Harriet'});