<?php

    $graphs = [
        'fatturato' =>
        [
            'type' => 'line',
            'data' => [1000,1322,1123,2301,3288,988,502,2300,5332,2300,1233,2322],
            'access' => 'guest'
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
            ],
            'access' => 'employee'
        ],
        'team_efficiency' =>
        [
            'type' => 'line',
            'data' =>
            [
                'Team1' => [1,0.8,0.7,0.5,0.7,0.8,0.9,0.5,0.6,1,0.3,0.9],
                'Team2' => [0.3,0.6,0.8,0.3,0.6,0.5,0.8,0.7,0.3,0.5,0.6,1],
                'Team3' => [0.2,0.1,0.5,0.1,0.6,0.5,0.4,0.6,0.3,0.4,0.5,0.7],
            ],
            'access' => 'clevel'
        ],
    ];

    //$fatturato = $graphs['fatturato'];
    //$fatturato_by_agent = $graphs['fatturato_by_agent'];

    //var_dump($fatturato);

    $fatturato = [];
    $fatturato_by_agent = [];
    $team_efficiency = [];

    foreach ($graphs as $key => $graph) {
        //echo 'This is the key: ' . $key . '<br><br>';
        //echo 'This is the type of graph: ' .$graph[type] . '<br><br>';
         //var_dump($graph[data]);
        // echo '<br><br>';

         if ($key == 'fatturato') {
             $fatturato['title'] = $key;
             $fatturato['type'] = $graph[type];
             $fatturato['data'] = $graph[data];
             $fatturato['access'] = $graph[access];
         }
         elseif ($key == 'fatturato_by_agent') {
             $fatturato_by_agent['title'] = $key;
             $fatturato_by_agent['type'] = $graph[type];

             foreach ($graph[data] as $key => $value) {
                 $fatturato_by_agent['agents'][] = $key;
                 $fatturato_by_agent['sales'][] = $value;

             }
             $fatturato_by_agent['access'] = $graph[access];
         }
         elseif ($key == 'team_efficiency') {
             $team_efficiency['title'] = $key;
             $team_efficiency['type'] = $graph[type];

             foreach ($graph[data] as $key => $value) {
                 $team_efficiency['team'][] = $key;
                 $team_efficiency['data'][] = $value;

             }
             $team_efficiency['access'] = $graph[access];
         }
    }

    $accessHierarchy['level'][] = $fatturato['access'];
    $accessHierarchy['level'][] = $fatturato_by_agent['access'];
    $accessHierarchy['level'][] = $team_efficiency['access'];

    // var_dump($fatturato) . '<br><br>';
    // echo '<br><br>';
    // var_dump($fatturato_by_agent) . '<br><br>';
    // echo '<br><br>';
    // var_dump($team_efficiency) . '<br><br>';
    // echo '<br><br>';
    // echo __DIR__;

    //var_dump($accessHierarchy);


?>
