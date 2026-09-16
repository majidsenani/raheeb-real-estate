/* مؤثرات بصرية: رسم القوس بخط متحرك + عد تصاعدي للأرقام
   تُعطَّل تلقائياً لمن يفعّل "تقليل الحركة" في نظامه */

function prefersReducedMotion(){
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/* عدّاد تصاعدي لأرقام الإحصائيات في الهيدر */
function animateCount(el){
  if(prefersReducedMotion()) return;
  const finalText = el.textContent.trim();
  const match = finalText.match(/\d+/);
  if(!match) return;
  const target = parseInt(match[0], 10);
  const prefix = finalText.slice(0, match.index);
  const suffix = finalText.slice(match.index + match[0].length);
  const duration = 900;
  const start = performance.now();

  if(el._countRAF) cancelAnimationFrame(el._countRAF);

  function tick(now){
    const progress = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    const val = Math.round(eased * target);
    el.textContent = `${prefix}${val}${suffix}`;
    if(progress < 1){
      el._countRAF = requestAnimationFrame(tick);
    } else {
      el.textContent = finalText;
    }
  }
  el._countRAF = requestAnimationFrame(tick);
}

function initCountUp(){
  document.querySelectorAll('.stat b').forEach(animateCount);
}

document.addEventListener('DOMContentLoaded', () => {
  initCountUp();
});
document.addEventListener('langchange', initCountUp);
