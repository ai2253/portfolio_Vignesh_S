// Mobile nav toggle
    const btn = document.getElementById('menuBtn');
    const mobile = document.getElementById('mobileNav');
    btn?.addEventListener('click', () => {
      const visible = mobile.style.display === 'block';
      mobile.style.display = visible ? 'none' : 'block';
    });

    // Active link highlighting on scroll
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('.links a, #mobileNav a');
    const linkMap = {};
    links.forEach(a => linkMap[a.getAttribute('href')] = a);
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if(e.isIntersecting){
          const id = '#' + e.target.id;
          document.querySelectorAll('.links a').forEach(a => a.classList.remove('active'));
          linkMap[id]?.classList.add('active');
        }
      })
    }, { threshold:.6 });
    sections.forEach(s => obs.observe(s));

    // Year
    document.getElementById('year').textContent = new Date().getFullYear();