$(function(){
    let movies = [];

    // clearing form
    function clearForm(){
        $('#title').val('');
        $('#rating').val('');
    }

    // rendering table
    function renderTable(){
        $('#movieTable tbody').empty();
        movies.map(function(movie, index){
            let row = '<tr>' + 
                        '<td>' + movie.title + '</td>' +
                        '<td>' + movie.rating + '</td>' +
                        '<td><button class="btn btn-danger btn-sm delete" data-index="' + index + '">Delete</button></td>' +
                      '</tr>'
            $('#movieTable tbody').append(row);
        });
    }
    
    // adding movies
    function addMovie(){
        let title = $('#title').val();
        let rating = $('#rating').val();
        if(rating && title){
            let movie = {
                title: title,
                rating: rating
            };
            movies.push(movie);
            renderTable();
            clearForm();
        }
    }

    // delete movie
    function deleteMovie(index){
        movies.splice(index, 1);
        renderTable();
    }

    // sorting movies
    function sortMovies(sortBy){
        movies.sort((a, b) => {
            if(sortBy === 'title'){
                return a.title.localeCompare(b.title);
            }   
            else if(sortBy === 'rating'){
                return b.rating - a.rating;
            }
        });
        renderTable();
    }

    // event listeners
    $('#addButton').click(addMovie);

    $(document).on('click', '.delete', function(){
        let index = $(this).data('index');
        deleteMovie(index);
    });

    $('#sortTitle').on('click', function(){
        sortMovies('title');
    });

    $('#sortRating').on('click', function(){
        sortMovies('rating');
    })
});