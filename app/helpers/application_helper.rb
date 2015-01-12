module ApplicationHelper

  def full_title(page_title = '')
    base_title = "Porto's App"
    if page_title.empty?
      base_title
    else
      "#{page_title} | #{base_title}"
    end
  end

  def nav_li_link(anchor, url)
    if current_page?(url)
      html = "<li class='active'>"
      html += link_to raw("#{anchor}<span class='sr-only'>(current)</span>"), url
    else
      html = '<li>'
      html += link_to anchor, url
    end
    html += '</li>'
    html.html_safe
  end

  def link_to_button(click_text, url, button_class = 'btn-default')
    button_class = "btn #{button_class}"
    link_to click_text, url, :class => button_class
  end

  def link_to_add_fields(name, f, association, link_class = "")
    new_object = f.object.send(association).klass.new
    id = new_object.object_id
    fields = f.fields_for(association, new_object, child_index: id) do |builder|
      render(association.to_s.singularize + '_fields', f: builder)
    end
    link_class = "add_fields #{link_class}"
    link_to(name, '#', class: link_class, data: {id: id, fields: fields.gsub("\n", "")})
  end

end
