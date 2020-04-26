<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>PHP Advanced Charts</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.3/handlebars.min.js" charset="utf-8"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>


                <?php $access = $_GET['level']; ?>



        <h2>Your level of access is: <?php echo $access; ?> </h2>

        <?php include 'step3/data.php';

        ?>

        <div id="chart-container" class="">
            <?php if ($access === $fatturato['access'] && (array_search($access, $accessHierarchy) >= 0)) { ?>
                <div class="container chart">
                    <canvas id="linechart"></canvas>
                </div>
            <?php

            } ?>
            <?php print_r(array_search($access, $accessHierarchy)); ?>
            <?php if ($access === $fatturato_by_agent['access']) { ?>
                <div class="container chart">
                    <canvas id="torta"></canvas>
                </div>
            <?php
                $key = array_search($access, $accessHierarchy);
                echo $key;
            } ?>
            <?php if ($access === $team_efficiency['access']) { ?>
                <div class="container chart">
                    <canvas id="team-linechart"></canvas>
                </div>
            <?php

            } ?>
        </div>


        <script src='step3/main.js'>

        </script>

    </body>
</html>
