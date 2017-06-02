package com.henrymbuguak.test;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.view.animation.Animation;
import android.view.animation.TranslateAnimation;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

public class QuestionActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_question);
        findViewById(R.id.tickcross).setVisibility(View.INVISIBLE);
        findViewById(R.id.correctornot).setVisibility(View.INVISIBLE);
        findViewById(R.id.nextButton).setVisibility(View.INVISIBLE);
    }
    public void onHintClick(View view) {
        Toast toasty = Toast.makeText(getApplicationContext(),getString(R.string.H1),Toast.LENGTH_SHORT);
        toasty.show();
    }
    public void onAnswerClick(View view) {
        String answer = ((EditText)findViewById(R.id.answer)).getText().toString();
        answer = answer.toLowerCase();
        String correctanswer = getString(R.string.A1);

        if (answer.equals(correctanswer)) {
            //Toast toasty = Toast.makeText(getApplicationContext(),"Right!", Toast.LENGTH_SHORT);
            //toasty.show();
            findViewById(R.id.tickcross).setVisibility(View.VISIBLE);
            TranslateAnimation animation = new TranslateAnimation(0,0,2000,0);
            animation.setDuration(1000);
            animation.setAnimationListener(new Animation.AnimationListener(){
                @Override
                public void onAnimationStart(Animation animation) {


                }
                @Override
                public void onAnimationEnd(Animation animation) {
                    findViewById(R.id.correctornot).setVisibility(View.VISIBLE);
                    findViewById(R.id.nextButton).setVisibility(View.VISIBLE);
                }
                @Override
                public void onAnimationRepeat(Animation animation) {

                }
            });
            findViewById(R.id.tickcross).startAnimation(animation);

        } else {
            Toast toasty = Toast.makeText(getApplicationContext(), "Nope!", Toast.LENGTH_SHORT);
            toasty.show();
        }
    }
}
