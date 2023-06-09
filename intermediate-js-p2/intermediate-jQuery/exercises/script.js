$(document).ready(function() {
    // Submit form to add an item to the list
    $('#list-form').submit(function(event) {
        event.preventDefault();

        let title = $('#title').val();
        let rating = $('#rating').val();

        // Add row to the table
        let row = $('<tr>');
        row.append($('<td>').text(title));
        row.append($('<td>').text(rating));
        row.append($('<td>').html('<button class="delete-btn btn btn-danger">Delete</button>'));

        $('#list-table tbody').append(row);

        // Clear form inputs
        $('#title').val('');
        $('#rating').val('');
    });

    // Delete row from the table
    $(document).on('click', '.delete-btn', function() {
        $(this).closest('tr').remove();
    });
  });