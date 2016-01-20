var arldgzn_id = 2;
var arldgzn_now = new Date()
var detik = arldgzn_now.getSeconds()
var arldgzn_place = detik % arldgzn_id;
arldgzn_place += 1;
if (arldgzn_place == 1) {
  url = "http://jualrpp2013.com";
  alt = "jual rpp kurikulum 2013";
  title = "JUDUL IKLAN 1";
  banner = "https://drive.google.com/open?id=0B8qd2v8s1RHRdXZ0SE1LS1V6NE0";
  width = "100%";
}
if (arldgzn_place == 2) {
  url = "http://yahoo.com";
  alt = "jual rpp 2013";
  title = "JUDUL IKLAN 2";
  banner = "https://drive.google.com/open?id=0B8qd2v8s1RHRLU1ydTNCSzFnVTg";
  width = "100%";
}
document.write('<a href=\"' + url + '\" target=\"_blank\" rel=\"nofollow\">');
document.write('<img src=\"' + banner + '\" width=')
document.write(width + ' height=' + height + ' ');
document.write('title=\"' + title + '\" alt=\"' + alt + '\"></a>');
