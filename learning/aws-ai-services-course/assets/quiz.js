/* ── Quiz component — shared by every lesson ──────────────────
   Usage:
   <div class="quiz" data-quiz>
     <div class="q-block">
       <p class="q-text">Question text?</p>
       <button class="q-option" data-correct="true">Answer A</button>
       <button class="q-option">Answer B</button>
       <button class="q-option">Answer C</button>
       <p class="q-explain">Shown after answering — teaches, never scolds.</p>
     </div>
     ... more .q-block ...
   </div>
   Exactly one option per block carries data-correct="true".
   Content rule (enforced by authors, not by JS): all options in a
   block must be the same length, so formatting gives no clues. */
(function () {
  function initQuiz(quiz) {
    var blocks = quiz.querySelectorAll('.q-block');
    var answered = 0;
    var score = 0;
    var scoreEl = document.createElement('div');
    scoreEl.className = 'quiz-score';
    scoreEl.textContent = '0 / ' + blocks.length;
    quiz.appendChild(scoreEl);

    blocks.forEach(function (block) {
      var options = block.querySelectorAll('.q-option');
      var explain = block.querySelector('.q-explain');
      var done = false;

      options.forEach(function (opt) {
        opt.addEventListener('click', function () {
          if (done) return;
          done = true;
          answered++;
          var isCorrect = opt.hasAttribute('data-correct');
          if (isCorrect) score++;
          options.forEach(function (o) {
            o.disabled = true;
            if (o.hasAttribute('data-correct')) o.classList.add('correct');
            else if (o === opt) o.classList.add('incorrect');
          });
          if (explain) explain.classList.add('show');
          scoreEl.textContent = score + ' / ' + blocks.length +
            (answered === blocks.length ? ' — ' +
              (score === blocks.length ? 'all of them.' : 'see the notes above for the rest.') : '');
        });
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-quiz]').forEach(initQuiz);
  });
})();
