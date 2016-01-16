var arldgzn_id = 3;
var arldgzn_now = new Date()
var detik = arldgzn_now.getSeconds()
var arldgzn_place = detik % arldgzn_id;
arldgzn_place += 1;
if (arldgzn_place == 1) {
  url = "https://google.com";
  alt = "DESKRIPSI IKLAN 1";
  title = "JUDUL IKLAN 1";
  banner = "http://1-728x90";
  width = "728";
  height = "90";
}
if (arldgzn_place == 2) {
  url = "http://yahoo.com";
  alt = "DESKRIPSI IKLAN 2";
  title = "JUDUL IKLAN 2";
  banner = "http://2-728x90";
  width = "728";
  height = "90";
}
if (arldgzn_place == 3) {
  url = "LINK 3";
  alt = "DESKRIPSI IKLAN 3";
  title = "JUDUL IKLAN 3";
  banner = "BANNER IKLAN http://3-728x90";
  width = "728";
  height = "90";
}
document.write('<a href=\"' + url + '\" target=\"_blank\" rel=\"nofollow\">');
document.write('<img src=\"' + banner + '\" width=')
document.write(width + ' height=' + height + ' ');
document.write('title=\"' + title + '\" alt=\"' + alt + '\"></a>');
