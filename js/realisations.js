const b=document.querySelector('.menu-toggle'),n=document.querySelector('.nav-links');b?.addEventListener('click',()=>n?.classList.toggle('open'));document.getElementById('year').textContent=new Date().getFullYear();

// Filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');

function applyFilter(filterValue) {
  cards.forEach(card => {
    if (card.getAttribute('data-category') === filterValue) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filterValue = button.getAttribute('data-filter');
    applyFilter(filterValue);
  });
});

// Apply initial filter based on the active button
const initialActive = document.querySelector('.filter-btn.active');
if (initialActive) {
  applyFilter(initialActive.getAttribute('data-filter'));
}

// Modal functionality
const modalButtons = document.querySelectorAll('[data-modal]');
const modals = document.querySelectorAll('.modal');

modalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('show');
    }
  });
});

const closeButtons = document.querySelectorAll('.modal-close');
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    if (modal) {
      modal.classList.remove('show');
    }
  });
});

// Close modal when clicking outside
modals.forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });
});
