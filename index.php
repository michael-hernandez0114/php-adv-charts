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


        <?php $access = $_GET['level'];


        ?>

        <h2>Your level of access is: <?php echo $access; ?> </h2>

        <?php include 'step3/data.php';

            $permission_level = array_search($access, $accessHierarchy);

        ?>

        <div id="chart-container" class="">
            <?php if ($permission_level >= 0) { ?>
                <div class="container chart">
                    <canvas id="linechart"></canvas>
                </div>
            <?php

            } ?>
            <?php if ($permission_level >= 1) { ?>
                <div class="container chart">
                    <canvas id="torta"></canvas>
                </div>
            <?php
            } ?>
            <?php if ($permission_level == 2) { ?>
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
