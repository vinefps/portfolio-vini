document.addEventListener('DOMContentLoaded', () => {
    // Menu Mobile
    let btnMenu = document.getElementById('btn-menu');
    let menu = document.getElementById('menu-mobile');
    let overlay = document.getElementById('overlay-menu');

    if (btnMenu) {
        btnMenu.addEventListener('click', () => {
            menu.classList.add('abrir-menu');
        });
    }

    if (menu) {
        menu.addEventListener('click', () => {
            menu.classList.remove('abrir-menu');
        });
    }

    if (overlay) {
        overlay.addEventListener('click', () => {
            menu.classList.remove('abrir-menu');
        });
    }

    // Ferramentas/Skills - sem usar transform que pode causar problemas
    const listItems = document.querySelectorAll('.container li');
    listItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = 'rgba(0, 255, 8, 0.1)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.backgroundColor = 'transparent';
        });
    });

    // Tornar todos os elementos visíveis imediatamente
    document.querySelectorAll('.especialidades-box, .img-port, .txt-sobre, .column').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
    });

    // Botão voltar ao topo - simplificado
    const btnTop = document.createElement('button');
    btnTop.id = 'btn-top';
    btnTop.innerHTML = '<i class="bi bi-arrow-up-circle-fill"></i>';
    btnTop.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #00FF08;
        color: #000;
        font-size: 24px;
        border: none;
        cursor: pointer;
        display: none;
        z-index: 999;
    `;
    
    document.body.appendChild(btnTop);
    
    btnTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btnTop.style.display = 'block';
        } else {
            btnTop.style.display = 'none';
        }
    });

    // Validação do formulário - simplificada
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Formulário enviado com sucesso!');
            form.reset();
        });
    }
});
