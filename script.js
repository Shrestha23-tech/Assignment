document.addEventListener('DOMContentLoaded', function() {
    fetch('data.json')
        .then(response =>
             response.json())
        .then(data => {
            const
             serviceContainer =
              document.getElementById('service-container');
            data.services.forEach(service =>
                 {
                const serviceDiv
                 = document.createElement('div');
                serviceDiv.innerHTML = `<h3>${service.name}</h3><p>$
                {service.description}</p>`;
                serviceContainer.appendChild(serviceDiv);
            });
        })
        .catch(error => console.error('Error loading JSON:', error));
});
