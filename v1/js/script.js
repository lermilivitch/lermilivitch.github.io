// ============================================
// SCRIPT.JS COMPLETO - UNDERTECH LANDING PAGE
// Versão corrigida com scroll + modal funcionando
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== ELEMENTOS DO DOM =====
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const modal = document.getElementById('scheduleModal');
    const closeModal = document.querySelector('.close-modal');
    const form = document.getElementById('scheduleForm');
    const header = document.querySelector('.header');
    
    // ===== MENU MOBILE =====
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Fechar menu ao clicar em link da navegação
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu && navToggle) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    });
    
    // ===== SMOOTH SCROLL - LINKS DE NAVEGAÇÃO =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // SE NÃO É BOTÃO DE AGENDAMENTO (.btn-primary), faz scroll
            if (!this.classList.contains('btn-primary') || 
                this.classList.contains('hero-btn') || 
                href === '#services') {
                
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // ===== MODAL DE AGENDAMENTO =====
    // Botões que ABREM o modal (exceto hero-btn e #services)
    const scheduleBtns = document.querySelectorAll('.btn-primary:not(.hero-btn):not([href="#services"])');
    
    scheduleBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Botão Hero "Conheça nossos serviços" - MANTÉM SCROLL
    const heroBtn = document.querySelector('.hero-btn');
    if (heroBtn) {
        heroBtn.addEventListener('click', (e) => {
            // Scroll normal para #services
            e.stopPropagation();
        });
    }
    
    // Fechar modal com X
    if (closeModal && modal) {
        closeModal.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
    
    // Fechar modal clicando fora
    if (modal) {
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Fechar modal com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // ===== FORMULÁRIO WHATSAPP =====
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const name = formData.get('name') || 'Não informado';
            const phone = formData.get('phone') || 'Não informado';
            const service = formData.get('service') || 'Não informado';
            const date = formData.get('date') || 'Não informado';
            const vehicle = formData.get('vehicle') || 'Não informado';
            const message = formData.get('message') || '';
            
            // Mensagem formatada para WhatsApp
            const whatsappMessage = `🚗 *NOVO AGENDAMENTO - UNDERTECH*\n\n` +
                `👤 *Nome:* ${name}\n` +
                `📱 *WhatsApp:* ${phone}\n` +
                (vehicle ? `🚗 *Veículo:* ${vehicle}\n` : '') +
                `🔧 *Serviço:* ${service}\n` +
                `📅 *Data preferida:* ${date}\n` +
                (message ? `💬 *Observações:* ${message}\n` : '') +
                `\n✅ Aguardo confirmação! 🛠️`;
            
            const whatsappUrl = `https://wa.me/551124940055?text=${encodeURIComponent(whatsappMessage)}`;
            
            // Fecha modal e abre WhatsApp
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
            window.open(whatsappUrl, '_blank');
            
            // Reset formulário
            form.reset();
        });
    }
    
    // ===== HEADER SCROLL EFFECT =====
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // ===== ANIMAÇÕES AOS (se disponível) =====
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }
    
    // ===== WHATSAPP BUTTON ANIMATION =====
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('mouseenter', () => {
            whatsappBtn.style.transform = 'scale(1.05) rotate(10deg)';
        });
        
        whatsappBtn.addEventListener('mouseleave', () => {
            whatsappBtn.style.transform = 'scale(1) rotate(0deg)';
        });
    }
    
    // ===== PRELOADER (opcional) =====
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
    
}); // Fim DOMContentLoaded
