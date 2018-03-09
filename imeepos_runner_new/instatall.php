<?php
$sql = "DROP TABLE IF EXISTS ".tablename('imeepos_runner3_setting').";
CREATE TABLE ".tablename('imeepos_runner3_setting')." (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) DEFAULT '0',
  `code` varchar(640) DEFAULT '',
  `value` text,
  `title` varchar(320) DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `IDX_CODE` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;";
pdo_query($sql);