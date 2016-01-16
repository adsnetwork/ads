var arldgzn_id = 3;
var arldgzn_now = new Date()
var detik = arldgzn_now.getSeconds()
var arldgzn_place = detik % arldgzn_id;
arldgzn_place += 1;
if (arldgzn_place == 1) {
  url = "https://google.com";
  alt = "DESKRIPSI IKLAN 1";
  title = "JUDUL IKLAN 1";
  banner = "banner http://1-300x600";
  width = "300";
  height = "600";
}
if (arldgzn_place == 2) {
  url = "http://yahoo.com";
  alt = "DESKRIPSI IKLAN 2";
  title = "JUDUL IKLAN 2";
  banner = "https://2-300x600";
  width = "300";
  height = "600";
}
if (arldgzn_place == 3) {
  url = "LINK 3";
  alt = "DESKRIPSI IKLAN 3";
  title = "JUDUL IKLAN 3";
  banner = "BANNER IKLAN http://3-300x600";
  width = "300";
  height = "600";
}
document.write('<a href=\"' + url + '\" target=\"_blank\" rel=\"nofollow\">');
document.write('<img src=\"' + banner + '\" width=')
document.write(width + ' height=' + height + ' ');
document.write('title=\"' + title + '\" alt=\"' + alt + '\"></a>');
</script>
