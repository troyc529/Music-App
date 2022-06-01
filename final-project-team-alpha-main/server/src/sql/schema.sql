CREATE TABLE songs (
    id int NOT NULL PRIMARY KEY,
    song_title text NOT NULL,
    album_title text NOT NULL,
    artist_name text NOT NULL,
    notes varchar NOT NULL
);

INSERT INTO songs (id, song_title, album_title, artist_name, notes) 
VALUES 
(1, 'Ode to Joy', 'Symphony No. 9', 'Beethoven', 'E4 E4 F4 G4 G4 F4 E4 D4 C4 C4 D4 E4 E4 D4 D4'),
(2, 'This is your captain speaking!', 'Southwest', 'Airlines', 'C5 A4'),
(3, 'Leave me Alone', 'The Invincibles', 'Shockwave', 'C5 F4 G#4 G#4 F4 F4 D#5 C#5 C5 G#4 C5 F4 G#4 G#4 F4 F4 D#5 C#5 C5 G#4 C5 C6 F4 F5 G#4 G#5 G#4 G#5 F4 F5 C5 C6 F4 F5 G#4 G#5 G#4 G#5 F4 F5 C4 C4 D#4 C4 C4 C4 D#4 F4 D#4 C4 C4 D#4 C4 C4 C4 D#4 F4 D#4 C4 C4 D#4 C4 C4 C4 D#4 F4 D#4 C4 C4 D#4 C4 C4 C4 D#4 F4 D#4 F4 G4 G#4 C5 G4 F4 G4 G#4 C5 G4 F4 F4 G4 G#4 C5 G4 F4 G4 G#4 C5 G4 F4 C5 F4 G#4 G#4 F4 F4 D#5 C#5 C5 G#4 C5 F4 G#4 G#4 F4 F4 D#5 C#5 C5 G#4 C5 C6 F4 F5 G#4 G#5 G#4 G#5 F4 F5 F4 F5 D#5 D#6 C#5 C#6 C5 C6 G#4 G#5 C5 C6 F4 F5 G#4 G#5 G#4 G#5 F4 F5 F4 F5 D#5 D#6 C#5 C#6 C5 C6 G#4 G#5 C5 A#4 C5 C5 D#5 F5 D#5 C5 D#5 C5 A#4 G#4 C5 D#5 F5 F4 C5 F4 G#4 C5 C6 A#4 C5 C6 C6 D#6 F6 D#6 D#7 C5 C7 D#6 C5 G#6 F6 A#4 A#5 F5 C6 D#5 D#6 F5 F6 F4 F5 C6 F4 D#5 D#5 D#5'),
(4, 'Stairway to Heaven','Led Zepplin','Led Zeppelin IV', 'A4 C4 E4 A5 B5 E4 C4 B4 C5 E4 C4 C5 F#4 D4 A4 D4 E4 C4 A4 C4 E4 C4 A4 G4 A4 A4'),
(5, 'Smoke on the Water','Deep Purple','Machine Head', 'A4 C4 E4 A5 B5 E4 C4 B4 C5 E4 C4 C5 F#4 D4 A4 D4 E4 C4 A4 C4 E4 C4 A4 G4 A4 A4');



