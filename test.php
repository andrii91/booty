<?php

/*https://api.instagram.com/oauth/access_token?client_secret=6f2720c9cfcf4480bfbb25302665416a&grant_type=authorization_code&redirect_uri=https://andrii91.github.io/booty/dist/&code=e76b7198e6df48b1ac82cdcaed3b1ad6

    $query = [
        'client_secret' => '6f2720c9cfcf4480bfbb25302665416a',
        'client_id' => '4334f407e89e4cafad556fd01034b1ab',
        'grant_type' => 'authorization_code',
        'redirect_uri' => 'https://andrii91.github.io/booty/dist/',
        'code' => 'e76b7198e6df48b1ac82cdcaed3b1ad6'
    ];



    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, 'https://api.instagram.com/oauth/access_token');
    curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $query);
    $out = curl_exec($curl);
    curl_close($curl);

    $out = urldecode($out);
    echo '<pre>';
    print_r($out);


*/

    /*
 * создаем новое подключение к API Instagram, о том, как получить $token, написано выше;
 */
$token = '7217942046.4334f40.a1898862e9a2400c92af7b91e792842a';
/*
 * Тут указываем либо ID пользователя, либо "self" для вывода фото владельца токена
 * Как получить ID? Да в том же инструменте, в котором вы получали токен
 */
$user_id = 'self';
$instagram_cnct = curl_init(); // инициализация cURL подключения
curl_setopt( $instagram_cnct, CURLOPT_URL, "https://api.instagram.com/v1/users/" . $user_id . "/media/recent?access_token=" . $token ); // подключаемся
curl_setopt( $instagram_cnct, CURLOPT_RETURNTRANSFER, 1 ); // просим вернуть результат
curl_setopt( $instagram_cnct, CURLOPT_TIMEOUT, 15 );
$media = json_decode( curl_exec( $instagram_cnct ) ); // получаем и декодируем данные из JSON
curl_close( $instagram_cnct ); // закрываем соединение
print_r($media);

/*
 * количество фотографий для вывода
 */
$limit = 4;
/*
 * размер изображений (высота и ширина одинаковые)
 */
$size = 350;
/*
 * функция array_slice() задает количество элементов, которые нам нужно получить из массива
 * если нам нужно вывести все фото, тогда: foreach($media->data as $data) {
 */
foreach(array_slice($media->data, 0, $limit) as $data) {
	echo '<a href="' . $data->link . '" target="_blank">';
	echo '<img src="'. $data->images->low_resolution->url . '" height="'.$size.'" width="'.$size.'"/>';
	echo '</a>';
}