angular.module('myApp').controller('TrickyWordCtrl',
function TrickyWordCtrl($scope, $timeout) {

    $scope.sections = {
        tw: {
            name: 'Tricky Words',
            items : []
        },
        num: {
            name: 'Numbers',
            items : []
        },
        ABC: {
            name: 'ABC',
            items : []
        },
        abc: {
            name: 'abc',
            items : []
        },
        AaBbCc :{
            name: 'AaBbCc',
            items : []
        },
        readingSplash :{
            name: 'Reading Splash',
            items : "Here is Mum. Mum is on the rug. Here is Zack. Zack runs into the water. Here is Dad. Dad runs into the water, too. Zack kicks the water at Dad. Here is Kitty. Kitty jumps into the water. 'I can jump into the water!' says Kitty. Kitty splashes Zack. Zack runs to Mum. Zack sees a little ball on the rug. Zack gets the little ball and kicks it. 'Mum! Mum!' says Zack. 'Can you see the ball?'. 'Yes!' says Mum. 'I can see it'. Dad runs out of the water. Zack kicks the little ball to Dad. Dad kicks the little ball to Kitty. The water splashes Kitty. 'Mum! Mum!' says Kitty. 'Look at me! Can you see me?'. 'Yes!' says Mum. 'I can see you.' Kitty gets out of the water. Kitty runs to Zack and Dad. 'Mum! Mum!' says Kitty. 'Can you see Dad?' 'Yes!' says Mum. 'I can see Dad'. Dad gets up and runs into the water. Kitty and Zack run into the water, too. Dad gets water. Kitty and Zack get water too. 'Mum! Mum!' says Kitty. 'Look out! Look out!'. Mum looks up!. Dad splashes Mum. Kitty splashes Mum. Zack splashes Mum. Mum jumps up! Dad, Kitty and Zack run to the water. Mum runs to the water too. Mum jumps into the water. Splash!. Mum splashes Dad. Mum splashes Kitty. Mum splashes Zack. 'Look at me!'".split("."),
            isReading: true
        },
        readingADogsLife :{
            name: 'Reading A dog’s life.',
            items : "A dog’s life. Hi. I’m Dino, the family dog. I help keep people safe, especially on the  roads. Take a look at my diary to see what I did last week.  Sunday.   Some children really don’t think. Our neighbour’s boy ran in front of a  car to get his ball. The car almost hit him. I saved him though.  Remember, always look and listen.  Monday.   Walking on the street at night can be very dangerous, especially if you wear dark clothes. Car drivers  can’t see you very well, just like these two I had to take home. Luckily I never go out without my  reflective jacket and collar. Remember, BE SEEN!.  Tuesday.  People can get very angry when driving, usually for silly reasons. One driver started shouting at Mum  today when she stopped to let some children cross the road. I soon made him stop.  Wednesday.   One thing makes me really mad. Grrrrrr. People walking on a dangerous road when they can walk on  the safe pavement. I saw two girls doing that today but I soon made them change their minds.  Thursday.   Seat belts can save your life! I make sure everyone in our car wears their seat belt. If they forget, I  soon remind them. Even I’ve got one.  Friday.   I like Fridays. The roads are quieter. But you still have to be careful. I caught Dad talking on his mobile  phone while driving. I soon stopped him though. Don’t worry, he got his phone back.  Saturday.   Today Mum took me for a walk. One car was parked in a very dangerous place. It was right on the  corner of the street. Don’t worry though. I left him a message!  ".split("."),
            isReading: true
        },
        readingInTheGarden :{
            name: 'Reading In the Garden.',
            items : "In the Garden. Look at the butterfly. Look at the catterpillar. Look at the spider. Look at the beetal. Look at the grasshopper. Look at the snail. Look at the worm. Look at the bird.".split("."),
            isReading: true
        },
        readingSinhala :{
            name: 'Reading Sinhala',
            items : "අපි බත් කමු. අම්මා, මම බත් කෑවා. මල්ලි බත් කෑවේ නෑ.".split("."),
            isReading: true
        }
    }

    $scope.readingWordIndex = 0;
    $scope.readingLineIndex = 0;
    $scope.readingLine = [];

    $scope.fillReadingBigHorse = function () {
        $scope.text = "Max is at the park. Max's dad is at the park. Kitty is at the park too. I can race you to the swings says Max. Max and Kitty run to the swings. Dad run too. Max gets to the swings. Look I am at the swings says Max. Kitty and Max get onto the swings. Dad cannot get onto the swings. He is too big. Can you push me syas Max. Can you push me says Kitty. Dad pushes Kitty and Max. They are going up. Max sees a red slide. I can race you to the red slide says Max. Max and Kitty run to the red slide. Dad runs too. Kitty gets to the red slide. Look I am at the red slide says Kitty. Kitty and Max get onto the slide. Dad cannot get onto the slide. He is too big. Kitty is going down. Max is going down too. Look out Kitty says Max. Here I am. I can rece you to the see-saw says Kitty. Kitty and Max run to the see-saw. Dad runs too. Kitty jumps onto the see-saw. Max jumps onto the see-saw too. Dad cannot get onto the see-saw. He is too big. Kitty is going up on the see-saw. Max is going down on the see-saw. They are going up and down on the see-saw. Max sees a little horse. He jumps down and runs to the little horse. Look out kitty says dad. Kitty and Dad run to Max. Max is on the little horse. Kitty gets onto the little horse too. Dad cannot get onto the little horse. He is too big. Dad pushes the little horse. This is fun says Kitty. This is fun says Max. Kitty sees a big horse. Look says Kitty. I can see a big horse. Kitty runs to the big horse. Max sees the big horse and run to it. Dad runs to the big horse too. can I pet the big horse says Kitty. Can I pet the big horse says Max. Yes can pet the big horse says Dad. Max and Kitty cannot pet the big horse. The horse is too big. The big horse looks down at kitty and Max. They look up at the big horse. They cannot pet the big horse. Dad can pet the big horse. The horse is big and Dad is big. Up up says Dad. The horse is big and Dad is big says Max.";
    }

    $scope.fillTw = function () {

        $scope.text = "I the he she me we be was to do of any many more before other were because want saw put could should would right two four goes does made their are all you your come some said here there they go no so my one by only old like have live give little down what when why where who which";

          var splited = $scope.text.split(" ");
          for (var i = 0; i < splited.length; i++) {
            if ($scope.sections.tw.items.indexOf(splited[i]) === -1) {
                $scope.sections.tw.items.push(splited[i]);
            }
          }

    }

    $scope.fillNum = function () {
        for (var i=20; i <= 100; i++) {
            $scope.sections.num.items.push(i + "");
        }
    }

    $scope.abcs = function () {
        for (var i='A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
            $scope.sections.ABC.items.push(String.fromCharCode(i));
            $scope.sections.abc.items.push(String.fromCharCode(i + 32));
            $scope.sections.AaBbCc.items.push("" + String.fromCharCode(i + 32) + "   " + String.fromCharCode(i));
        }
    }

    $scope.updateSection = function() {
        $scope.words = angular.copy($scope.selectedSection.items);
        $scope.next();
    }

    $scope.nextReading = function() {

        var line = $scope.words[$scope.readingLineIndex].split(" ");

        $scope.wordMid = line[$scope.readingWordIndex].trim()

        for (var i = 0; i < $scope.readingWordIndex; i++) {
            $scope.lineLeft = $scope.lineLeft + " " + line [i];
        }

        for (var i = $scope.readingWordIndex + 1 ; i < line.length; i++) {
            $scope.lineRight = $scope.lineRight + " " + line[i];
        }

        $scope.readingWordIndex++;
        if ($scope.readingWordIndex >= line.length) {
            $scope.readingLineIndex++;
            $scope.readingWordIndex = 0;
        }

        if (($scope.readingLineIndex + 1 ) >= $scope.words.length) {
            $scope.readingLineIndex = 0;
        }

        if ($scope.wordMid.length<=0) {
            $scope.next();
        }

    }

    $scope.next = function() {

        $scope.lineLeft = '';
        $scope.wordMid = '';
        $scope.lineRight = '';
        $scope.word = '';

        if ($scope.selectedSection.isReading) {
            $scope.nextReading();
        } else {
            $scope.nextOther();
        }

    }

    $scope.nextOther = function() {
        if ($scope.words.length<=0) {
            $scope.words = angular.copy($scope.selectedSection.items);
        }
        $scope.word = $scope.words[Math.floor(Math.random() * $scope.words.length)];
        $scope.words.splice($scope.words.indexOf($scope.word), 1);

    }

    $scope.auto = function() {
        if ($scope.autoPlay) {
            $scope.next();
            $timeout( function(){ $scope.auto(); }, $scope.delay);
        }
    }

    $scope.fillTw();
    $scope.fillNum();
    $scope.abcs();

    $scope.selectedSection = $scope.sections.num

    $scope.autoPlay=true;
    $scope.delay = 10000

    $scope.updateSection();
    $scope.auto();

}
);

