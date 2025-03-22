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

    // Ferramentas/Skills
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
    document.querySelectorAll('.especialidades-box, .img-port, .txt-sobre, .column, .container, .interface-2, #frontend, #backend, #frameworks').forEach(el => {
        if (el) {
            el.style.opacity = '1';
            el.style.visibility = 'visible';
            el.style.display = el.classList.contains('flex') ? 'flex' : 'block';
            el.style.transform = 'none';
        }
    });

    // Garantir que listas sejam visíveis
    document.querySelectorAll('.column ul, .column li, .column i').forEach(el => {
        if (el) {
            el.style.opacity = '1';
            el.style.visibility = 'visible';
            el.style.display = el.tagName === 'LI' ? 'flex' : 'block';
        }
    });

    // Scroll suave para navegação
    const links = document.querySelectorAll('header a, .btn-contato a, .menu-mobile a');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // Verifica se o link tem uma âncora e se ela existe na página
            const href = this.getAttribute('href');
            if (href && href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    // Scroll suave até o elemento
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                    
                    // Se menu mobile estiver aberto, fecha
                    if (menu && menu.classList.contains('abrir-menu')) {
                        menu.classList.remove('abrir-menu');
                    }
                }
            }
        });
    });

    // Botão voltar ao topo
    const btnTop = document.createElement('button');
    btnTop.id = 'btn-top';
    btnTop.innerHTML = '<i class="bi bi-arrow-up-circle-fill"></i>';
    document.body.appendChild(btnTop);
    
    btnTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Mostrar/ocultar botão baseado no scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btnTop.style.display = 'block';
        } else {
            btnTop.style.display = 'none';
        }
    });
    
    // Validação do formulário
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let valid = true;
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    valid = false;
                    input.style.border = '2px solid #FF3333';
                    
                    // Remover borda vermelha quando o usuário começa a digitar
                    input.addEventListener('input', function() {
                        this.style.border = 'none';
                    }, { once: true });
                }
            });
            
            if (valid) {
                // Simulação de envio do formulário
                const btnEnviar = form.querySelector('.btn-enviar input');
                const originalText = btnEnviar.value;
                
                btnEnviar.value = 'Enviando...';
                btnEnviar.disabled = true;
                
                // Simulação de delay de rede
                setTimeout(() => {
                    // Mensagem de sucesso
                    const successMsg = document.createElement('div');
                    successMsg.textContent = 'Mensagem enviada com sucesso!';
                    successMsg.style.cssText = `
                        color: #00FF08;
                        text-align: center;
                        padding: 10px;
                        margin-top: 15px;
                        font-weight: 500;
                    `;
                    
                    form.appendChild(successMsg);
                    form.reset();
                    
                    btnEnviar.value = originalText;
                    btnEnviar.disabled = false;
                    
                    // Remover mensagem de sucesso após alguns segundos
                    setTimeout(() => {
                        successMsg.remove();
                    }, 5000);
                }, 1500);
            }
        });
    }
});
