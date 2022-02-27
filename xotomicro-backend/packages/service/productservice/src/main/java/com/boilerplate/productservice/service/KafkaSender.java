package com.boilerplate.productservice.service;

import org.apache.kafka.clients.producer.RecordMetadata;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.stereotype.Component;
import org.springframework.util.concurrent.ListenableFuture;

@Component
public class KafkaSender {

    private static final Logger logger = LoggerFactory.getLogger(KafkaSender.class);

    private final KafkaTemplate<String, String> kafkaTemplate;

    public KafkaSender(KafkaTemplate<String, String> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public void send(String topic, String message) {
        ListenableFuture<SendResult<String, String>> future = kafkaTemplate.send(topic, message);
        try {
            SendResult<String, String> result = future.get();
            RecordMetadata metadata = result.getRecordMetadata();
            logger.info("Send message to topic={}, partition={}, offset={}", metadata.topic(), metadata.partition(), metadata.offset());
        } catch (Exception e) {
            logger.error("Error while sending kafka message. ", e);
        }
    }

}
