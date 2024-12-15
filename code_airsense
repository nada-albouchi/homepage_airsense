#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <DHT.h>
#include <WiFi.h> 
#include <FirebaseESP32.h> 

#define WIFI_SSID "wifi_ssid"
#define WIFI_PASSWORD "wifi_password"

#define FIREBASE_HOST "https://airsense-ce82c-default-rtdb.firebaseio.com/"
#define FIREBASE_AUTH "######"

LiquidCrystal_I2C lcd(0x27, 16, 2);
const int gasSensorPin = 34;
#define DHTPIN 4
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);
const int fireSensorPin = 5;
const int buzzerPin = 12;

unsigned long previousMillis = 0;
const long interval = 3000;

FirebaseData firebaseData;

void setup() {
  Serial.begin(115200);
  lcd.init();
  lcd.backlight();
  dht.begin();
  pinMode(fireSensorPin, INPUT);
  pinMode(buzzerPin, OUTPUT);
  digitalWrite(buzzerPin, LOW);
  
  lcd.setCursor(0, 0);
  lcd.print("Sensors Init...");
  delay(2000);
  lcd.clear();

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi");

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
}

void loop() {
  int gasValue = analogRead(gasSensorPin);
  Serial.print("Gas Value: ");
  Serial.println(gasValue);

  float humidity = dht.readHumidity();
  float temperature = dht.readTemperature();

  if (isnan(humidity) || isnan(temperature)) {
    lcd.setCursor(0, 0);
    lcd.print("Failed to read");
    lcd.setCursor(0, 1);
    lcd.print("from DHT sensor");
    return;
  }

  Firebase.setFloat(firebaseData, "/temperature", temperature);
  Firebase.setFloat(firebaseData, "/humidity", humidity);
  Firebase.setInt(firebaseData, "/gasValue", gasValue);

  int fireState = digitalRead(fireSensorPin);

  if (fireState == HIGH) {
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("Fire Detected!");
    digitalWrite(buzzerPin, HIGH);
    delay(1000);
    digitalWrite(buzzerPin, LOW);
    delay(1000);
  } else {
    unsigned long currentMillis = millis();
    static int displayState = 0;

    if (currentMillis - previousMillis >= interval) {
      previousMillis = currentMillis;
      lcd.clear();

      switch (displayState) {
        case 0:
          lcd.setCursor(0, 0);
          lcd.print("Humidity: ");
          lcd.print(humidity);
          lcd.print("%  ");
          break;
        case 1:
          lcd.setCursor(0, 0);
          lcd.print("Temp: ");
          lcd.print(temperature);
          lcd.print(" C   ");
          break;
        case 2:
          lcd.setCursor(0, 0);
          lcd.print("Gas: ");
          lcd.print(gasValue);
          lcd.print("    ");
          break;
      }

      displayState = (displayState + 1) % 3;
    }
  }
}
