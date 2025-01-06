<?php
// http://localhost/donat/api/database.php?mod=table

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

include('donat.php');

class koneksi{
public $database=array(
'h'=>'localhost',
'u'=>'root',
'p'=>'usbw',
'n'=>'piawai'
);

function connect(){
  $db=$this->database ;
try {
  $conn = new PDO("mysql:host=$db[h];dbname=$db[n]", "$db[u]", "$db[p]");
  // $conn = new PDO("mysql:host=localhost;dbname=kuis", "root", "bayam");
// $conn = new PDO("firebird:host=localhost;dbname=/var/lib/firebird/2.5/data/employee.fdb;charset=UTF8", "sysdba", "masterkey");
// $conn = new PDO("mssql:host='den1.mssql8.gear.host';dbname='apar', 'apar', 'bayam'");
// $conn = new PDO("sybase:host=$host;dbname=$dbname, $user, $pass");
// $conn = new PDO("sqlite:my/database/path/database.db");
// $conn = new PDO("odbc:psbodbc");
// $conn = new PDO("dblib:host=localhost;dbname=psb", "bayam","bayam");
}
catch(PDOException $e) {  echo $e->getMessage(); }
return $conn;
}

function setup(){
// http://localhost/model/?mod=setup
  $conn=$this->connect();
  $query = file_get_contents("op.sql");
  $setup = $conn->prepare($query);
  if ($setup->execute()) $info="Success";
  else  $info="Fail";
  $out = array('Info' =>$info);
  echo json_encode($out);
}

}


class mod extends ktupad {

  public $conf2= array(
  'tb' => 'master_param',
  'mn' => 'param',
  );


  public function info(){
    $out['url'] = 'https://api.donat.id/ukm/database.php';
    $out['mod'] = 'login';
  echo json_encode($out);
  }

  public function pesan(){
    // http://localhost/donat/api.php?mod=pesan
    $sql = "SELECT * FROM master_pesan";
    $out['data'] = $this->getData($sql);
  echo json_encode($out);
  }

  public function param(){
    // http://localhost/donat/api.php?mod=param
    $sql = "SELECT * FROM master_param";
    $out['data'] = $this->getData($sql);
  echo json_encode($out);
  }


  public function card(){
    $sql = "SELECT * FROM master_users where email='$email' and pin='$pin'";
    $sql = "update master_menu a set isi=(SELECT count(id) as count FROM a.tb)";
    $login=$out['login'] = $this->getData($sql);
    $login=$out['login'] = $this->getData($sql);
  echo json_encode($out);
  }

  public function login(){
  $d=$this->conf;
  $email=$d['data']['email'];
  $pin=$d['data']['pin'];

  $sql = "SELECT * FROM master_users where email='$email' and pin='$pin'";
  $login=$out['login'] = $this->getData($sql);
  if($login){ $akses=$login[0]['akses'];

  $sql = "SELECT * FROM master_akses where nama='$akses'";
  $idakses=$out['akses'] = $this->getData($sql);

  if($idakses){ $idmenu=$out['idmenu'] = $idakses[0]['r']; }else{$idmenu=0;}

  $sql = "SELECT * FROM master_menu where id in($idmenu)";
  $out['menu'] = $this->getData($sql);

  $sql = "SELECT * FROM master_dashboard";
  $out['dashboard'] = $this->getData($sql);

}

  echo json_encode($out);
  }

    public function setting(){
      $d=$this->conf;
      $id=$d['id'];
    $sql = "SELECT * FROM master_settings where id='$id'";
    $out= $this->getData($sql);
    echo json_encode($out);
    }


}


$app = new mod();
$app->init();

?>
