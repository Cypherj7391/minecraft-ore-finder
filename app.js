const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
tabs.forEach(btn => btn.addEventListener('click', () => {
  tabs.forEach(t => t.classList.toggle('active', t === btn));
  panels.forEach(p => p.classList.toggle('active', p.id === btn.dataset.tab));
}));
document.getElementById('openSeed').addEventListener('click', () => {
  const seed = document.getElementById('seedInput').value.trim();
  const edition = document.getElementById('edition').value;
  const version = document.getElementById('version').value;
  if (!seed) { alert('Enter your world seed first.'); return; }
  const query = new URLSearchParams({ seed, edition, version });
  // Opens a third-party seed map; the destination may ask you to set the seed/version again.
  window.open('https://www.chunkbase.com/apps/seed-map#' + encodeURIComponent(seed), '_blank', 'noopener');
});
document.getElementById('saveCoords').addEventListener('click', () => {
  const x = document.getElementById('x').value;
  const z = document.getElementById('z').value;
  const y = document.getElementById('y').value;
  const ore = document.getElementById('ore').value;
  if (x === '' || z === '') { alert('Enter both X and Z coordinates.'); return; }
  const out = document.getElementById('coordsResult');
  out.textContent = `${ore} notes — X: ${x}, Y: ${y === '' ? 'not set' : y}, Z: ${z}. These are your saved notes for this session, not a verified ore location.`;
  out.classList.remove('hidden');
});
const imageInput = document.getElementById('imageInput');
const preview = document.getElementById('preview');
const wrap = document.getElementById('previewWrap');
const zoomLabel = document.getElementById('zoomLabel');
let zoom = 1, objectUrl = null;
function setZoom() { preview.style.transform = `scale(${zoom})`; zoomLabel.textContent = `${Math.round(zoom*100)}%`; }
imageInput.addEventListener('change', () => {
  const file = imageInput.files && imageInput.files[0];
  if (!file) return;
  if (objectUrl) URL.revokeObjectURL(objectUrl);
  objectUrl = URL.createObjectURL(file);
  preview.src = objectUrl; zoom = 1; setZoom(); wrap.classList.remove('hidden');
});
document.getElementById('zoomIn').addEventListener('click', () => { zoom = Math.min(zoom + .25, 3); setZoom(); });
document.getElementById('zoomOut').addEventListener('click', () => { zoom = Math.max(zoom - .25, .5); setZoom(); });
document.getElementById('clearImage').addEventListener('click', () => {
  preview.removeAttribute('src'); wrap.classList.add('hidden'); imageInput.value = '';
  if (objectUrl) URL.revokeObjectURL(objectUrl); objectUrl = null;
});
