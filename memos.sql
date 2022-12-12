-- SQLite
CREATE TABLE memos (
	id INTEGER PRIMARY KEY,
	text TEXT NOT NULL,
	created TIMESTAMP DEFAULT (datetime(CURRENT_TIMESTAMP,'localtime'))
);

INSERT INTO memos(id, text) 
    values (1, 'test1'),
    (2, 'test2');