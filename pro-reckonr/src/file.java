void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(trigPin,LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin,HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin,LOW);
  duration = pulseIn(echoPin, HIGH);
  distance = (duration / 2) / 29.1;  Serial.print(distance);
  Serial.println(" cm");  if(distance<50){
    digitalWrite(7,HIGH);
    digitalWrite(8,LOW);
    digitalWrite(6,LOW);
  }
  else if(distance>100){
    digitalWrite(8,HIGH);
    digitalWrite(7,LOW);
    digitalWrite(6,LOW);
  }
  else{
    digitalWrite(6,HIGH);
    digitalWrite(8,LOW);
    digitalWrite(7,LOW);
  }  delay(500);}