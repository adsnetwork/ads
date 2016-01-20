var arldgzn_id = 2;
var arldgzn_now = new Date()
var detik = arldgzn_now.getSeconds()
var arldgzn_place = detik % arldgzn_id;
arldgzn_place += 1;
if (arldgzn_place == 1) {
  url = "http://jualrpp2013.com";
  alt = "jual rpp kurikulum 2013";
  title = "JUDUL IKLAN 1";
  banner = "http://3.bp.blogspot.com/-u-taqrVDlVY/VYuDYyC4rOI/AAAAAAAAAIY/D5ZjFlBoEAA/s1600/PP%2B2015%2B2016%2BBANNER.jpg";
  width = "100%";
}
if (arldgzn_place == 2) {
  url = "http://jualrpp2013.com";
  alt = "jual rpp 2013";
  title = "JUDUL IKLAN 2";
  banner = "http://3.bp.blogspot.com/-AHxdYbYoFio/Vp-lVZKffaI/AAAAAAAAAic/LPOqSdMJj_M/s1600/iklandiva2.jpg";
  width = "100%";
}
document.write('<a href=\"' + url + '\" target=\"_blank\" rel=\"nofollow\">');
document.write('<img src=\"' + banner + '\" width=')
document.write(width + ' height=' + height + ' ');
document.write('title=\"' + title + '\" alt=\"' + alt + '\"></a>');
