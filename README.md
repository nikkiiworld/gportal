# G-Portál kódok
Ezt a repót azért hoztam létre, hogy a G-Portálhoz készített kódjaimnak egy jobb rendszert teremtsek vele. A kódok nagyrészét át is írtam, az esetlegesen felmerülő hibákat kijavítottam bennük, illetve legfőképpen külön szedtem őket, így sokkal kényelmesebben, és egyszerűbben használhatók lettek. Ennek a fájlnak a tartalma folyamatosan bővül(het).

**!! Minden kódot Szerkeszthető Láblécbe ajánlott elhelyezni !!**

Ha bármilyen problémát/hibát tapasztaltok, azt jelezzétek felém!

Elérhető kódok

## 1. Szerkesztő lecserélése TinyMCE-re
```html
<!-- TINYMCE -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/tinymce/4.6.7/tinymce.min.js"></script>
<script src="https://rawgit.com/nikkiiworld/gportal/master/scripts/tinymce/tinymce.min.js"></script>
<!-- TINYMCE END -->
```

## 2. Ennek a scriptnek a segítségével a blog bejegyzésben szereplő tartalmat egy új osztály segítségével egyszerűbben formázhatjátok.
CSS-ben: .post-content{ /* bejegyzés tartalma */ } 
Ez csak a tartalomra vonatkozik, tehát a cím, címkék, stb-re nem.
```html
<!-- POST-CONTENT class to blog posts -->
<script src="https://rawgit.com/nikkiiworld/gportal/master/scripts/add_post_content_wrapper_class/post_content_wrapper.js"></script>
<!-- POST-CONTENT END -->
```

## 3. Karakterkódolás megváltoztatása UTF-8-ra
```html
<!-- CHARSET TO UTF-8 -->
<script src="https://rawgit.com/nikkiiworld/gportal/master/scripts/change-charset/change-charset.js"></script>
<!-- CHARSET TO UTF-8 END -->
```

## 4. Összes kis kép formátumú ikon lecserélése FontAwesome ikonokra
```html
<!-- CHANGE ICONS TO FONTAWESOME -->
<script src="https://rawgit.com/nikkiiworld/gportal/master/scripts/all_icons_to_fontawesome/icons_to_fontawesome.js"></script>
<!-- CHANGE ICONS TO FONTAWESOME END -->
```

## 5. SMS sáv reszponzívvá tétele + alapformázás eltávolítása
```html
<!-- RESPONSIVE SMS BAR -->
<script src="https://rawgit.com/nikkiiworld/gportal/master/scripts/responsive_sms_bar/sms_bar.js"></script>
<!-- RESPONSIVE SMS BAR END -->
```

## 6. Teljes bejegyzés helyett rövidített tartalom megjelenítése a blogban:
```html
<!-- SHOW BLOG POST EXCERPT   -->
<script src="https://rawgit.com/nikkiiworld/gportal/master/scripts/short_content/short_content.js"></script>
<script type="text/javascript">
$(document).ready(function(){
  roviditettBejegyzesek(150, "[..]", false); // 150 karaktert jelenít meg, és a végén [..]
});
</script>
<!-- SHOW BLOG POST EXCERPT END  -->
```

## 7. Sidebar osztályok CSS formázáshoz
A két oldalsáv együttesen formázható a .sidebar{} segítségével, vagy külön külön a left & right-sidebar-on keresztül.
Illetve a középsősávhoz is került egy új osztály.
Ezek a .column_side & .column_main elemek felette .sitecol td elemekhez adódnak hozzá.
Bal oldalsávhoz: .sidebar, .left-sidebar
Jobb oldalsáv: .sidebar, .right-sidebar,
Középső sáv: .main-content
```html
<!-- ADD SIDEBAR CLASSES -->
<script src="https://rawgit.com/nikkiiworld/gportal/master/scripts/sidebar_classes/sidebar_classes.js"></script>
<!-- ADD SIDEBAR CLASSES END -->
```

## 8. Disqus kommentrendszer beépítése GP-re & Legújabb kommentek megjelenítése
```html
<!-- DISQUS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment-with-locales.min.js"></script>
<script src="https://rawgit.com/nikkiiworld/gportal/master/scripts/disqus/disqus.js"></script>
<script src="https://rawgit.com/nikkiiworld/gportal/master/scripts/disqus/latest_disqus_comments.js"></script>
<script type="text/javascript">
$(document).ready(function(){
   disqus("gplife"); // gplife helyére a fórum neve kerüljön, " " jelek közé !
   latestDisqusComments (".lastcomments", "gplife", 5, "API_KEY"); 
  /* 
    ".lastcomments" = a blogplusz kommenteket cseréli le disqus kommentekre 
    "gplife" - fórum neve
    5 - ennyi komment jelenik meg
    "API_KEY" - Itt az API_KEY rész cseréljétek ki a valódi API kulcsotokra, amit https://disqus.com/api/applications/ ezen az oldalon tudtok elkészíteni, és a Public Key-t kell keresni.
  */
});
</script>
<!-- DISQUS END -->
```

## 9. Dátum és Szerző szétválasztása + osztályok
Működik alul & felül is.
Az osztályok: 
.post-date{} // ebben lesz mindkettő / de a .txtmini/.blogpostdate is megmarad mellette
.date{} // csak a dátum
.author{} // csak a szerző
CSS-ben ezután könnyen rakható be eléjük FontAwesome ikon, pl: 
.date::before{content:'\fontawesomekód'; font-family: FontAwesome; padding: 0 5px;}
```html
<!-- SEPARATE POST DATE AND AUTHOR -->
<script src="https://rawgit.com/nikkiiworld/gportal/master/scripts/separate_blog_date/separate_blog_date.min.js"></script>
<!-- SEPARATE POST DATE AND AUTHOR -->
```

## 10. Blogmodul osztály
```html
<!-- ADD BLOGMODUL CLASS -->
<script src="https://rawgit.com/nikkiiworld/gportal/master/scripts/blogmodul-class/blogmodul-class.js"></script>
<script type="text/javascript">
$(document).ready(function(){
    blogmodulClass();
});
</script>
<!-- ADD BLOGMODUL CLASS -->
```

## 11. Előző/Következő felirat felcserélése Hírek/cikkek modulban
```html
<!-- CHANGE PREV/NEXT TEXT -->
<script src="https://rawgit.com/nikkiiworld/gportal/master/scripts/change_prev_next_text.js"></script>
<script type="text/javascript">
$(document).ready(function(){
    changePrevNext();
});
</script>
<!-- CHANGE PREV/NEXT TEXT -->
```

## 12. Kapcsolódó bejegyzések megjelenítése bejegyzések alatt
```html
<!-- RELATED POSTS -->
<script src="https://rawgit.com/nikkiiworld/gportal/master/scripts/related_posts/relatedposts.min.js"></script>
<!-- RELATED POSTS -->
```

