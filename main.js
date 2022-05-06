const features_container = document.getElementsByClassName("features-container")
const features_items = document.getElementsByClassName("features-items")
const company_container = document.getElementsByClassName("company-container")
const company_items = document.getElementsByClassName("company-items")

var feature_items_remove = false
features_container[0].addEventListener('mouseover', () => {

    feature_items_remove = !feature_items_remove

    if (feature_items_remove) {
        features_items[0].classList.remove('feature-items-remove');
    } else {
        features_items[0].classList.add('feature-items-remove');
    }
});

features_container[0].addEventListener('mouseout', () => {

    feature_items_remove = !feature_items_remove

    if (feature_items_remove) {
        features_items[0].classList.remove('feature-items-remove');
    } else {
        features_items[0].classList.add('feature-items-remove');
    }
});


var company_items_remove = false
company_container[0].addEventListener('mouseover', () => {

    company_items_remove = !company_items_remove

    if (company_items_remove) {
        company_items[0].classList.remove('company-items-remove');
    } else {
        company_items[0].classList.add('company-items-remove');
    }
});

var company_items_remove = false
company_container[0].addEventListener('mouseout', () => {

    company_items_remove = !company_items_remove

    if (company_items_remove) {
        company_items[0].classList.remove('company-items-remove');
    } else {
        company_items[0].classList.add('company-items-remove');
    }
});




