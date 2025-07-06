// Add smooth animations and interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // Add loading animation to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
            this.disabled = true;
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
            }, 2000);
        });
    });

    // Add hover effects to status badge
    const statusBadge = document.querySelector('.status-badge');
    if (statusBadge) {
        statusBadge.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        statusBadge.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }

    // Add typing effect to welcome message
    const welcomeText = document.querySelector('.welcome-section h2');
    if (welcomeText) {
        const text = welcomeText.textContent;
        welcomeText.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                welcomeText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        setTimeout(typeWriter, 500);
    }
});

// Refresh page function
function refreshPage() {
    location.reload();
}

// Show details function
function showDetails() {
    const details = `
        <div style="background: rgba(0,0,0,0.8); position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 1000; display: flex; align-items: center; justify-content: center;">
            <div style="background: white; padding: 30px; border-radius: 15px; max-width: 500px; margin: 20px;">
                <h3 style="margin-bottom: 20px; color: #667eea;">System Details</h3>
                <div style="margin-bottom: 15px;">
                    <strong>User Agent:</strong> ${navigator.userAgent}
                </div>
                <div style="margin-bottom: 15px;">
                    <strong>Screen Resolution:</strong> ${screen.width}x${screen.height}
                </div>
                <div style="margin-bottom: 15px;">
                    <strong>Current URL:</strong> ${window.location.href}
                </div>
                <div style="margin-bottom: 15px;">
                    <strong>Page Load Time:</strong> ${performance.now().toFixed(2)}ms
                </div>
                <button onclick="this.parentElement.parentElement.remove()" style="background: #667eea; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">
                    Close
                </button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', details);
}

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl+R or F5 to refresh
    if ((e.ctrlKey && e.key === 'r') || e.key === 'F5') {
        e.preventDefault();
        refreshPage();
    }
    
    // Escape to close modals
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('[style*="position: fixed"]');
        modals.forEach(modal => modal.remove());
    }
});

// Add notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#667eea'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 1001;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Show welcome notification
setTimeout(() => {
    showNotification('Welcome to Flask Kubernetes App! 🚀', 'success');
}, 1000);

// Toggle password visibility
function togglePassword() {
    const passwordValue = document.getElementById('password-value');
    const realPassword = document.getElementById('real-password');
    const eyeIcon = document.querySelector('#toggle-password i');
    if (passwordValue.textContent === '********') {
        passwordValue.textContent = realPassword.textContent;
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        passwordValue.textContent = '********';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    }
} 