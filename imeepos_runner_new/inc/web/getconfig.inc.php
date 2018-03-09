<?php
global $_W, $_GPC;
$list = pdo_getall('imeepos_runner3_setting', array('uniacid' => $_W['uniacid']));
foreach ($list as &$li) {
    $li['value'] = unserialize($li['value']);
}
unset($li);
die(json_encode($list));
