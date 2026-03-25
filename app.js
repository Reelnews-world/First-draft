const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('navOverlay');
const menuToggle = document.getElementById('menuToggle');
const topbarTitle = document.getElementById('topbarTitle');
const navItems = document.querySelectorAll('.nav-item');
const screens = document.querySelectorAll('.screen');

const screenLabels = {
  'dashboard': 'Dashboard',
  'story-queue': 'Story Queue',
  'verification': 'Verification View',
  'headline-lab': 'Headline Lab',
  'forecast-lab': 'Forecast Lab',
  'settlement': 'Settlement Queue',
  'archive': 'Archive / Analytics',
};

function openNav() {
  sidebar.classList.add('open');
  overlay.classList.add('open');
}

function closeNav() {
  sidebar.classList.remove('open');
  overlay.classList.remove('open');
}

menuToggle.addEventListener('click', () => {
  sidebar.classList.contains('open') ? closeNav() : openNav();
});

overlay.addEventListener('click', closeNav);

function navigate(screenKey) {
  navItems.forEach(item => item.classList.remove('active'));
  screens.forEach(s => s.classList.remove('active'));

  const activeItem = document.querySelector(`.nav-item[data-screen="${screenKey}"]`);
  const activeScreen = document.getElementById(`screen-${screenKey}`);

  if (activeItem) activeItem.classList.add('active');
  if (activeScreen) activeScreen.classList.add('active');

  topbarTitle.textContent = screenLabels[screenKey] || '';
  closeNav();
}

navItems.forEach(item => {
  item.addEventListener('click', () => navigate(item.dataset.screen));
});
