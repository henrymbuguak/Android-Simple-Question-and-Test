package com.henrymbuguak.test;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.splash_page);
    }
    public void onSplashPageCLick(View view) {
        Intent intent = new Intent(this, QuestionActivity.class);
        startActivity(intent);
        finish();
    }
}


