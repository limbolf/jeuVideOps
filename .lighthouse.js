module.exports = {
    ci: {
        // ? On définie les dossiers à observer
        collect: {
            staticDistDir: './js13k-2021',
            staticDistDir: './js13k-spaceWord'
        },
        // ? On regarde les "catégories" de lighthouse
        assert: {
            assertion: {
                'categories:performance': ['error', {minscore: 0.9}],
                'categories:accessibility': ['warn', {minscore: 0.9}],
            },
        },
        // ? On met en ligne le rapport
        upload: {
            target: 'temporary-public-storage',
        },
    },
};