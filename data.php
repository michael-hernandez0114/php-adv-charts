<?php

    $graphs = [
        'fatturato' =>
        [
            'type' => 'line',
            'data' => [1000,1322,1123,2301,3288,988,502,2300,5332,2300,1233,2322]
        ],

        'fatturato_by_agent' =>
        [
            'type' => 'pie',
            'data' =>
            [
                'Marco' => 9000,
                'Giuseppe' => 4000,
                'Mattia' => 3200,
                'Alberto' => 2300
            ]
        ]
    ];

    //$fatturato = $graphs['fatturato'];
    //$fatturato_by_agent = $graphs['fatturato_by_agent'];

    //var_dump($fatturato);

    $fatturato = [];
    $fatturato_by_agent = [];

    foreach ($graphs as $key => $graph) {
        //echo 'This is the key: ' . $key . '<br><br>';
        //echo 'This is the type of graph: ' .$graph[type] . '<br><br>';
         //var_dump($graph[data]);
        // echo '<br><br>';

         if ($key == 'fatturato') {
             $fatturato['title'] = $key;
             $fatturato['type'] = $graph[type];
             $fatturato['data'] = $graph[data];
         }
         elseif ($key == 'fatturato_by_agent') {
             $fatturato_by_agent['title'] = $key;
             $fatturato_by_agent['type'] = $graph[type];

             foreach ($graph[data] as $key => $value) {
                 $fatturato_by_agent['agents'][] = $key;
                 $fatturato_by_agent['sales'][] = $value;

             }
         }




    }

    //var_dump($fatturato) . '<br><br>';
    //var_dump($fatturato_by_agent) . '<br><br>';


?>
