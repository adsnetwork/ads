var arldgzn_id = 3;
var arldgzn_now = new Date()
var detik = arldgzn_now.getSeconds()
var arldgzn_place = detik % arldgzn_id;
arldgzn_place += 1;
if (arldgzn_place == 1) {
  url = "https://google.com";
  alt = "DESKRIPSI IKLAN 1";
  title = "JUDUL IKLAN 1";
  banner = "http://3.bp.blogspot.com/-u-taqrVDlVY/VYuDYyC4rOI/AAAAAAAAAIY/D5ZjFlBoEAA/s1600/PP%2B2015%2B2016%2BBANNER.jpg";
  width = "300";
  height = "250";
}
if (arldgzn_place == 2) {
  url = "http://yahoo.com";
  alt = "DESKRIPSI IKLAN 2";
  title = "JUDUL IKLAN 2";
  banner = "https://lh3.googleusercontent.com/-KLrZKg24Plc/VSYlCBwWleI/AAAAAAAAAFc/EI3NzhkEw28/w140-h140-p/anime_wallpaper_hd_7_AnyWallz.jpg";
  width = "300";
  height = "250";
}
if (arldgzn_place == 3) {
  url = "LINK 3";
  alt = "DESKRIPSI IKLAN 3";
  title = "JUDUL IKLAN 3";
  banner = "BANNER IKLAN";
  width = "300";
  height = "250";
}
document.write('<a href=\"' + url + '\" target=\"_blank\" rel=\"nofollow\">');
document.write('<img src=\"' + banner + '\" width=')
document.write(width + ' height=' + height + ' ');
document.write('title=\"' + title + '\" alt=\"' + alt + '\"></a>');
