document.addEventListener('DOMContentLoaded', () => {
    const carros = {
        carro1: "O Fusca é um carro compacto produzido pela Volkswagen, conhecido por seu design único e confiabilidade.",
        carro2: "O Civic é um sedan da Honda, famoso por sua eficiência de combustível e conforto.",
        carro3: "O Mustang é um esportivo da Ford, icônico por seu desempenho e estilo agressivo."
    };

    const listaCarros = document.querySelectorAll('#carros li');
    const descricao = document.getElementById('descricao');

    listaCarros.forEach(item => {
        item.addEventListener('click', () => {
            const carro = item.getAttribute('data-carro');
            descricao.textContent = carros[carro];
        });
    });
});
