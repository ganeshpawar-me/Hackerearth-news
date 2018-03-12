// ajax call
$.ajax({
        url: "http://starlord.hackerearth.com/hackernews",
        cache: false,
        success: function(data){
            var count = data.length;
            for (var i = 1 ; i < count; i++) {
                var url = data[i]['url'];
                $("#news-container").append("<div class='news'><p><span class='news-title'><a  target='_blank' href=" + url + ">" + data[i]['title'] + "</a></span><p class='news-body'><span class='auther'>Auther</span>: <span>altstar</span><br><span class='points'>Points</span>: <span>1</span><br><span class='comments'>Comments</span>: <span>0</span></p></p></div>");
            }
        }
    });

