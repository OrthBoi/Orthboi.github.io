const verses = [
    "Psalm 68:7 - Den Einsamen gibt er ein Zuhause, den Gefangenen schenkt er Freiheit und Glück",
    "Psalm 54:6 - Aber ich weiss: Gott ist mein Helfer, der Herr setzt sich stets für mich ein",
    "Psalm 62:2 - Bei Gott allein findet meine Seele Ruhe, von ihm kommt meine Hilfe",
    "Philliper 2:10-11 - Damit in dem Namen Jesu jedes Knie sich beuge, der Himmlischen und Irdischen und Unterirdischen, und jede Zunge bekenne, dass Jesus Christus der Herr ist",
    "Philliper 4:13 - Alles vermag ich durch Jesus Christus, der mich stärkt",
    "Lukas 1:37 - Denn für Gott ist nichts unmöglich"
  ];
  
  function displayRandomVerse() {
    const randomIndex = Math.floor(Math.random() * verses.length);
    const randomVerse = verses[randomIndex];
    alert(randomVerse);
  }
  
  document.getElementById('randomButton').addEventListener('click', displayRandomVerse);
  