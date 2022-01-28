$('.loading').show();
$('#search').hide();
fetch('https://gnews.io/api/v4/top-headlines?&token=dd46bacc0304c3b57f5b19f959b41c00')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        $('.loading').hide();
        data["articles"].forEach(function (element) {
            var content = '';
            content += "<div class='row'>";
            content += "<div class='col-md-4'><img class='img-responsive' width='100%' src='" + element.image + "'></div>"
            content += "<div class='col-md-8'><a href='" + element.url + "' target='_blank'>" + element.title + "</a>";
            content += "<br><i>" + element.publishedAt + "</i>";
            content += "<p>" + element.description + "</div></div>";
            $('#newfeed').append(content);
        });
    });
$('#search_icon').click(function () {
    $('#search').show();
})
$('#button_search').click(function () {
    var keyword = $('#keyword').val();
    $('.loading').show();
    fetch('https://gnews.io/api/v4/search?q=' + keyword + '&token=dd46bacc0304c3b57f5b19f959b41c00')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            $('.loading').hide();
            $('#newfeed').empty();
            data["articles"].forEach(function (element) {
                var content = '';
                content += "<div class='row'>";
                content += "<div class='col-md-4'><img class='img-responsive' width='100%' src='" + element.image + "'></div>"
                content += "<div class='col-md-8'><a href='" + element.url + "' target='_blank'>" + element.title + "</a>";
                content += "<br><i>" + element.publishedAt + "</i>";
                content += "<p>" + element.description + "</div></div>";
                $('#newfeed').append(content);
            });
        });
})
