async function createGame(evt) {
    evt.preventDefault();
    $("start-game").hide();
    const response = await axios.get(`http://jservice.io/api/random`, {params: {
        count: 6 
    }});
    console.log(response);
    let questionArray = [];
    for(question of response.data){
        randQuestions = await axios.get(`http://jservice.io/api/clues`, {params: {
            category: question.category_id,
        }})
        questionArray.push(randQuestions);
        console.log(questionArray);
    }
    let gameBoard = $(
        `<table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col" class="text-center" style="width: 20%">${response.data[0].category.title}</th>
                    <th scope="col" class="text-center" style="width: 20%">${response.data[1].category.title}</th>
                    <th scope="col" class="text-center" style="width: 20%">${response.data[2].category.title}</th>
                    <th scope="col" class="text-center" style="width: 20%">${response.data[3].category.title}</th>
                    <th scope="col" class="text-center" style="width: 20%">${response.data[4].category.title}</th>
                    <th scope="col" class="text-center" style="width: 20%">${response.data[5].category.title}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="text-center switch" data-question="${questionArray[0].data[0].question}">?</td>
                    <td class="text-center switch" data-question="${questionArray[1].data[0].question}">?</td>
                    <td class="text-center switch" data-question="${questionArray[2].data[0].question}">?</td>
                    <td class="text-center switch" data-question="${questionArray[3].data[0].question}">?</td>
                    <td class="text-center switch" data-question="${questionArray[4].data[0].question}">?</td>
                    <td class="text-center switch" data-question="${questionArray[5].data[0].question}">?</td>
                <tr>
                    <td class="text-center switch" data-question="${questionArray[0].data[1].question}">?</td>
                    <td class="text-center switch" data-question="${questionArray[1].data[1].question}">?</td>
                    <td class="text-center switch" data-question="${questionArray[2].data[1].question}">?</td>
                    <td class="text-center switch" data-question="${questionArray[3].data[1].question}">?</td>
                    <td class="text-center switch" data-question="${questionArray[4].data[1].question}">?</td>
                    <td class="text-center switch" data-question="${questionArray[5].data[1].question}">?</td>
                </tr>   
                <tr>
                    <td class="text-center switch" data-question="${questionArray[0].data[2].question}">?</td>
                    <td class="text-center switch" data-question="${questionArray[1].data[2].question}">?</td>
                    <td class="text-center switch" data-question="${questionArray[2].data[2].question}">?</td>
                    <td class="text-center switch" data-question="${questionArray[3].data[2].question}">?</td>
                    <td class="text-center switch" data-question="${questionArray[4].data[2].question}">?</td>
                    <td class="text-center switch" data-question="${questionArray[5].data[2].question}">?</td>
                </tr>
                <tr>
                    <td class="text-center switch" data-question="${questionArray[0].data[3].question}">?</td>
                    <td class="text-center switch" data-question="${questionArray[1].data[3].question}">?</td>
                    <td class="text-center switch" data-question="${questionArray[2].data[3].question}">?</td>
                    <td class="text-center switch" data-question="${questionArray[3].data[3].question}">?</td>
                    <td class="text-center switch" data-question="${questionArray[4].data[3].question}">?</td>
                    <td class="text-center switch" data-question="${questionArray[5].data[3].question}">?</td>
                </tr>
                <tr>
                    <td class="text-center switch" data-question="${questionArray[0].data[4].question}">?</td>
                    <td class="text-center switch" data-question="${questionArray[1].data[4].question}">?</td>
                    <td class="text-center switch" data-question="${questionArray[2].data[4].question}">?</td>
                    <td class="text-center switch" data-question="${questionArray[3].data[4].question}">?</td>
                    <td class="text-center switch" data-question="${questionArray[4].data[4].question}">?</td>
                    <td class="text-center switch" data-question="${questionArray[5].data[4].question}">?</td>
                </tr>
            </tbody>
        </table>          
        `);
    
    $("#boardArea").append(gameBoard);

    $(".table-bordered").on("click", "td.switch", function() {
        console.log("table called")
        if($(this).text() === '?') {
            console.log("text being clicked")
            $(this).text($(this).attr('data-question'));
        }
    });
}


$(function() {
    $("#start-game").on("click", createGame);
    $("#reset-game").on("click", function(e){
        $('table').remove();
        createGame(e);
    });
});