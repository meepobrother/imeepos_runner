<?php
/**
 * 小明跑腿模块微站定义
 *
 * @author imeepos
 * @url
 */
defined('IN_IA') or exit('Access Denied');

class Imeepos_runner_newModuleSite extends WeModuleSite
{

    private function checkWebDo($do = '')
    {
        $url = $this->createWebUrl($do);
        if ($_GET['do'] != $do) {
            header("Location:" . $url);
            exit();
        }
    }
    private function checkMobileDo($do = '')
    {
        $url = $this->createMobileUrl($do);
        if ($_GET['do'] != $do) {
            header("Location:" . $url);
            exit();
        }
    }

    public function doMobileIndex()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('index');
        include $this->template('index');
    }
    public function doMobileHome()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('home');
        include $this->template('index');
    }
    public function doWebIndex()
    {
        global $_W, $_GPC;
        $this->checkWebDo('index');
        include $this->template('web/index');
	}
	
	public function doWebHome()
    {
        global $_W, $_GPC;
        $this->checkWebDo('home');
        include $this->template('web/index');
    }

    public function doWebSetting()
    {
        global $_W, $_GPC;
        $this->checkWebDo('setting');
        include $this->template('web/index');
    }

}
