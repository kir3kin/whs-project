<?php

// echo "<pre>";
// echo($_POST['text']);

echo('heelo world')

// if (isset($_POST['name'])) {$name = $_POST['name']; if ($name == '') {unset($name);}}

// if (isset($_POST['tel'])) {$tel = $_POST['tel']; if ($tel == '') {unset($tel);}}



/* Проверяем заполнены ли все поля */
// if (isset($name) && isset($tel))
// {

/* Убираем все лишние пробелы, а также преобразуем все теги HTML в символы*/
// $fio = htmlspecialchars(trim($name));
// $email = htmlspecialchars(trim($tel));




/* Проверяем правильность ввода капчи */
  //if ($captcha == $pr)
  //{
/* Формируем сообщение */
// $address = "d.grebenuk@inbox.ru";
// $sub = "Заказ обратного звонка";
// $mes = "Клиент: $fio \nЗаказал звонок на номер: $email \n ";

/* Отправка сообщения */
// $verify = mail ($address,$sub,$mes,"Content-type:text/plain; charset = UTF-8\r\nFrom:$fio");
//       if ($verify == 'true')
    
//      {
//        echo "<body>
// <div style='margin-top: 30px'><table border='1' width='450' align='center' cellpadding='20' cellspacing='6'>
// <tr>
// <td>
// <div style='margin'><div align='center' style='color:#0E4194; font-size:24px;'>Администраторация сайта свяжется с Вами в ближайшее время!</div>
// <p><div align='center' style='color:#fff' >Спасибо за покупку!</div>
// <p style='color:#fff'><div align='right'><i><b style='color:#0E4194'>C уважением, администрация сайта - bonadomus.com.ua</b></i></div>
// </tr>
// </td>
// </table></div>";
//       }
//       else 
//     {
//     echo "<span style='color:#fff'>Сообщение не отправлено!</span>";
//     }
  /*}
  else
  {
  echo "<span style='color:#fff'> Вы не правильно ввели сумму чисел с картинки </span>";
  }*/


// }
// else
// {
// echo "Вы заполнили не все поля!";
// }
?>