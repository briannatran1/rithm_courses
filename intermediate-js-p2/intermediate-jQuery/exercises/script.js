$(function(){
    let movies = [];

    // clearing form
    function clearForm(){
        $('#title').val('');
        $('#rating').val('');
    }

    // rendering table
    function renderTable(){
        
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
});