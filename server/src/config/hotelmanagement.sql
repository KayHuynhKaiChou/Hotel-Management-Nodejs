CREATE TABLE room_service(
    id BIGINT NOT NULL,
    reservation_id BIGINT NOT NULL,
    service_id BIGINT NOT NULL,
    quantity BIGINT NOT NULL,
    status VARCHAR(255) NOT NULL,
    order_at DATETIME NOT NULL,
    created_at DATETIME NULL,
    updated_at DATETIME NULL
);
ALTER TABLE
    room_service ADD CONSTRAINT room_service_id_primary PRIMARY KEY(id);

CREATE TABLE payment(
    id BIGINT NOT NULL,
    reservation_id BIGINT NOT NULL,
    amount BIGINT NOT NULL,
    payment_method BIGINT NOT NULL,
    status BIGINT NOT NULL,
    paid_at DATETIME NOT NULL,
    created_at DATETIME NULL,
    updated_at DATETIME NULL
);
ALTER TABLE
    payment ADD CONSTRAINT payment_id_primary PRIMARY KEY(id);

CREATE TABLE amenity(
    id BIGINT NOT NULL,
    title VARCHAR(255) NOT NULL,
    status BIGINT NOT NULL DEFAULT 1,
    created_at DATETIME NULL,
    updated_at DATETIME NULL
);
ALTER TABLE
    amenity ADD CONSTRAINT amenity_id_primary PRIMARY KEY(id);

CREATE TABLE service(
    id BIGINT NOT NULL,
    name VARCHAR(255) NOT NULL,
    price BIGINT NOT NULL,
    type BIGINT NOT NULL,
    created_at DATETIME NULL,
    updated_at DATETIME NULL
);
ALTER TABLE
    service ADD CONSTRAINT service_id_primary PRIMARY KEY(id);

CREATE TABLE type_room(
    id BIGINT NOT NULL,
    title VARCHAR(255) NOT NULL,
    type BIGINT NOT NULL,
    adult_capacity BIGINT NOT NULL,
    kids_capacity BIGINT NOT NULL,
    base_price BIGINT NOT NULL,
    amenity_id BIGINT NOT NULL,
    image_id BIGINT NOT NULL,
    status BIGINT NOT NULL DEFAULT 1,
    created_at DATETIME NULL,
    updated_at DATETIME NULL
);
ALTER TABLE
    type_room ADD CONSTRAINT type_room_id_primary PRIMARY KEY(id);

CREATE TABLE image_type_room(
    id BIGINT NOT NULL,
    link VARCHAR(255) NOT NULL,
    created_at DATETIME NULL,
    updated_at DATETIME NULL
);
ALTER TABLE
    image_type_room ADD CONSTRAINT image_type_room_id_primary PRIMARY KEY(id);

CREATE TABLE user(
    id BIGINT NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    district VARCHAR(255) NOT NULL,
    ward VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    id_card BIGINT NOT NULL,
    phone VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    birth_day DATETIME NOT NULL,
    gender VARCHAR(255) NOT NULL,
    position BIGINT NOT NULL,
    salary BIGINT NULL,
    image VARCHAR(255) NOT NULL,
    created_at DATETIME NULL,
    updated_at DATETIME NULL
);
ALTER TABLE
    user ADD CONSTRAINT user_id_primary PRIMARY KEY(id);

CREATE TABLE room(
    id BIGINT NOT NULL,
    type_room_id BIGINT NOT NULL,
    room_number BIGINT NOT NULL,
    floor BIGINT NOT NULL,
    description BIGINT NOT NULL,
    status BIGINT NOT NULL,
    created_at DATETIME NULL,
    updated_at DATETIME NULL
);
ALTER TABLE
    room ADD CONSTRAINT room_id_primary PRIMARY KEY(id);

CREATE TABLE reservation(
    id BIGINT NOT NULL,
    user_id BIGINT NOT NULL,
    room_id BIGINT NOT NULL,
    checkin_at DATETIME NOT NULL,
    checkout_at DATETIME NOT NULL,
    status VARCHAR(255) NOT NULL,
    created_at DATETIME NULL,
    updated_at DATETIME NULL
);
ALTER TABLE
    reservation ADD CONSTRAINT reservation_id_primary PRIMARY KEY(id);

ALTER TABLE
    room ADD CONSTRAINT room_type_room_id_foreign FOREIGN KEY(type_room_id) REFERENCES type_room(id);
ALTER TABLE
    reservation ADD CONSTRAINT reservation_room_id_foreign FOREIGN KEY(room_id) REFERENCES room(id);
ALTER TABLE
    room_service ADD CONSTRAINT room_service_service_id_foreign FOREIGN KEY(service_id) REFERENCES service(id);
ALTER TABLE
    room_service ADD CONSTRAINT room_service_reservation_id_foreign FOREIGN KEY(reservation_id) REFERENCES reservation(id);
ALTER TABLE
    reservation ADD CONSTRAINT reservation_user_id_foreign FOREIGN KEY(user_id) REFERENCES user(id);
ALTER TABLE
    type_room ADD CONSTRAINT type_room_amenity_id_foreign FOREIGN KEY(amenity_id) REFERENCES amenity(id);
ALTER TABLE
    type_room ADD CONSTRAINT type_room_image_id_foreign FOREIGN KEY(image_id) REFERENCES image_type_room(id);
ALTER TABLE
    payment ADD CONSTRAINT payment_reservation_id_foreign FOREIGN KEY(reservation_id) REFERENCES reservation(id);