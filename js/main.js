//api
//gedan  http://music.163.com/api/playlist/detail?id=517570640
//geci   http://music.163.com/api/song/lyric?os=pc&id=93920&lv=-1&kv=-1&tv=-1
//gequ   http://music.163.com/api/song/detail/?id=28377211&ids=[28377211]
//user   http://music.163.com/api/user/playlist/?offset=0&limit=1001&uid=366526585

/*按钮*/
$("#btn_group").find("a").on("click",function(){
    $("#btn_group").find("a").removeClass("active");
    $(this).addClass("active");
    var num = $(this).attr("value");
    if(num==0){
        $("#detail_container").removeClass("show").addClass("hide");
        $("#song_play").removeClass("show").addClass("hide");
        $("#playlist_container").removeClass("hide").addClass("show");
    }
    if(num==1){
        $("#playlist_container").removeClass("show").addClass("hide");
        $("#song_play").removeClass("show").addClass("hide");
        $("#detail_container").removeClass("hide").addClass("show");
    }
    if(num==2){
        $("#playlist_container").removeClass("show").addClass("hide");
        $("#detail_container").removeClass("show").addClass("hide");
        $("#song_play").removeClass("hide").addClass("show");
    }
});
/*登录ajax事件*/
$("#user_btn").on("click",function(){
    var user_id = document.getElementById('user_id').value;
    var playlist_container = document.getElementById("playlist_container");
    var user_str='';
    $.ajax({
        type:"get",
        url:"http://music.163.com/api/user/playlist/?offset=0&limit=1001&uid="+user_id,
        success:function(data){
            if(data.playlist[0]==" "){
                alert("�������id����ȷ�����������룡");
            }else{
                $("#login").removeClass("show").addClass("hide");
                $("#playlist_container").removeClass("hide").addClass("show");
                $("#btn_group").removeClass("hide").addClass("show");
                //render第一页
                /*alert("success");*/
                user_str += '<div class="welcome" style="background-image: url(' + data.playlist[0].creator.backgroundUrl + ');">';
                user_str += '<img class="touxiang" src="'+ data.playlist[0].creator.avatarUrl +'" alt=""/>';
                user_str += '<p class="nickname">'+ data.playlist[0].creator.nickname +'</p>';
                user_str += '</d'+'iv>';
                user_str += '<h3 class="hd">('+ data.playlist.length +')</h3>';
                user_str += '<ul>';
                for(var i=0; i<data.playlist.length; i++){
                    user_str += '<li class="itm">';
                    user_str += '<div class="pic">';
                    user_str += '<img class="picture" src="'+ data.playlist[i].coverImgUrl +'">';
                    user_str += '</div>';
                    user_str += '<div class="content">';
                    user_str += '<h4>'+ data.playlist[i].name +'</h4>';
                    user_str += '<div>'+ data.playlist[i].trackCount +'<span class="content_1"></span>'+ data.playlist[i].playCount +'<span class="content_2"></span></div>';
                    user_str += '</div>';
                    user_str += '<a href="#" class="f-link" value="'+ data.playlist[i].id +'"></a>';
                    user_str += '</li>';
                }
                user_str += '</ul>';
                playlist_container.innerHTML = user_str;
                //render结束
                //第一页按钮事件
                first_page_ajax();
            }
        },
        error:function(){
            alert("fail");
        }
    });
});

/*第一页ajax事件*/
var first_page_ajax = function(){
    $("#playlist_container").find(".f-link").on("click",function(){
        $("#playlist_container").removeClass("show").addClass("hide");
        $("#detail_container").removeClass("hide").addClass("show");
        $("#btn_group").find("a").eq(0).removeClass("active");
        $("#btn_group").find("a").eq(1).addClass("active");
        var playlist_id = $(this).attr("value");
        var detail_str = '';
        $.ajax({
            type:"get",
            url:"http://music.163.com/api/playlist/detail?id="+playlist_id,
            success:function(data){
                //render�ڶ�ҳ
                /*alert("success");*/
                detail_str += '<div class="detail-header">';
                    detail_str += '<img class="list-picture" src="'+ data.result.coverImgUrl +'" alt=""/>';
                    detail_str += '<div class="detail-content">';
                        detail_str += '<h2 class="list-name">'+ data.result.name +'</h2>';
                        detail_str += '<div>';
                            detail_str += '<img src="'+ data.result.creator.avatarUrl +'" alt=""/>';
                            detail_str += '<span>'+ data.result.creator.nickname +'</span>';
                        detail_str += '</div>';
                    detail_str += '</div>';
                detail_str += '</div>';
                detail_str += '<h3 class="hd"></h3>';
                detail_str += '<ul>';
                for(var i=0; i<data.result.tracks.length; i++){
                    detail_str += '<li class="item">';
                        detail_str += '<span class="num">'+ (i+1) +'</span>';
                        detail_str += '<div class="discription">';
                            data.result.tracks[i].alias = data.result.tracks[i].alias[0]==""?data.result.tracks[i].name:data.result.tracks[i].alias[0];
                            detail_str += '<h3>'+ data.result.tracks[i].name +'</h3>';
                            detail_str += '<p>'+ data.result.tracks[i].artists[0].name +'<span class="discription_2"></span>'+ data.result.tracks[i].album.name +'</span></p>';
                            detail_str += '<a value="'+ data.result.tracks[i].mp3Url +'" class="link"  href="#" id="'+ data.result.tracks[i].id +'"></a>';
                        detail_str += '</div>';
                        detail_str += '<img src="http://s2.music.126.net/style/mobile/img/share/share_icon_play@2x.png?d70719ada5b84fee9f8bf71697548127" alt=""/>';
                    detail_str += '</li>';
                }
                detail_str += '</ul>';
                $("#detail_container").html(detail_str);
                //render结束
                //第二页点击事件
                second_page_ajax();
            },
            error:function(){
                alert("fail!");
            }
        });

        //http://music.163.com/api/playlist/detail?id=517570640

    });
};

/*第二页ajax事件*/
//  http://music.163.com/api/song/detail/?id=21725725&ids=[21725725]
//
var second_page_ajax = function(){
    $("#detail_container").find(".link").on("click",function(){
        $("#detail_container").removeClass("show").addClass("hide");
        $("#song_play").removeClass("hide").addClass("show");
        $("#btn_group").find("a").eq(1).removeClass("active");
        $("#btn_group").find("a").eq(2).addClass("active");
        //play
        var song_url = $(this).attr("value");
        $("#play_audio").attr("src",song_url);

        //search
        var song_id =$(this).attr("id");
        var song_str = '';
        $.ajax({
            type:"get",
            url:"http://music.163.com/api/song/detail/?id="+ song_id +"&ids=["+ song_id +"]",
            success:function(data){
                data = JSON.parse(data);
                song_str += '<div class="song-header">';
                    song_str += '<img class="song-picture" src="'+ data.songs[0].album.picUrl +'" alt=""/>';
                    song_str += '<img class="needle" src="http://s2.music.126.net/style/mobile/img/share/needle-ip6.png?3f93d5058118825f2a3cb7dc986c97f1" alt=""/>';
                    song_str += '<img class="stop" src="http://s2.music.126.net/style/mobile/img/share/play_btn-ip6.png?821041cdab98add9c4681b40365354ff" alt=""/>';
                song_str += '</div>';
                song_str += '<div class="song-message">';
                    song_str += '<h2><span>'+ data.songs[0].name +'</span><span class="message_1"></span><span>'+ data.songs[0].artists[0].name +'</span></h2>';
                    song_str += '<div class="geci">';
                        song_str += '没有 geci';


                    song_str += '</div>';
                song_str += '</div>';
                $(".song_play_container").html(song_str);
            },
            error:function(){
                alert("fail");
            }
        })
    })
};


